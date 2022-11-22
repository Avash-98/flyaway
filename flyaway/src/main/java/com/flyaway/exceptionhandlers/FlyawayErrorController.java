package com.flyaway.exceptionhandlers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FlyawayErrorController implements ErrorController {

	@RequestMapping(path="/error")
	public String handleError(Model model) {
		model.addAttribute("errorMessage", "Sorry! No such URL present :(");
		
		return "views/errors/default-error";
	}
	
	
	// Resource: Ram N Java: https://www.youtube.com/watch?v=FwSSN5oSli8
	/*
	 * @RequestMapping(path="/error") public String handleError(HttpServletRequest
	 * request) { Integer statusCode= (Integer)
	 * request.getAttribute("javax.servlet.error.status_code"); Exception exception
	 * = (Exception) request.getAttribute("javax.servlet.error.exception");
	 * 
	 * return String.format( "<html><pre>Error message</pre></html>", statusCode,
	 * exception == null? "N/A" : exception.getMessage() ); }
	 */
	/*
	 * @Override public String getErrorPath() { return "/error"; }
	 */
}
