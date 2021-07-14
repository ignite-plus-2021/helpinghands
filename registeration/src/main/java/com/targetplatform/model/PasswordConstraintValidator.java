package com.targetplatform.model;

import org.passay.*;


import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordConstraintValidator implements ConstraintValidator<ValidPassword , String>{


	
	public void initialize(ValidPassword constraintAnnotation)
	{

	}
	
	@Override
	public boolean isValid(String password, ConstraintValidatorContext context) {
		
		PasswordValidator validator = new PasswordValidator(Arrays.asList(
				// length between 8 and 16 characters
				  new LengthRule(8, 16),

				  // at least one upper-case character
				  new CharacterRule(EnglishCharacterData.UpperCase, 1),

				  // at least one lower-case character
				  new CharacterRule(EnglishCharacterData.LowerCase, 1),

				  // at least one digit character
				  new CharacterRule(EnglishCharacterData.Digit, 1),

				  // at least one symbol (special character)
				  new CharacterRule(EnglishCharacterData.Special, 1),
				  
				  // no whitespace 
				  new WhitespaceRule(),
				  
				  // define some illegal sequences that will fail when >= 5 chars long
				  new IllegalSequenceRule(EnglishSequenceData.Alphabetical, 5, false),
				  
				  // alphabetical is of the form 'abcde', numerical is '34567', qwery is 'asdfg'
				  new IllegalSequenceRule(EnglishSequenceData.Numerical, 5, false),
				  
				// the false parameter indicates that wrapped sequences are allowed; e.g. 'xyzabc'
				  new IllegalSequenceRule(EnglishSequenceData.USQwerty, 5, false)
				
				));
		
		 RuleResult result = validator.validate(new PasswordData(password));

	        if (result.isValid()) {
	            return true;
	        }

	        List<String> messages = validator.getMessages(result);
	        String messageTemplate = messages.stream().collect(Collectors.joining(","));
	        context.buildConstraintViolationWithTemplate(messageTemplate)
	                .addConstraintViolation()
	                .disableDefaultConstraintViolation();
		
		return false;
	}

}
