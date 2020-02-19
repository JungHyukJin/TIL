package com.Schedule.msg;

import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import com.Schedule.msg.service.IMemberService;
import com.Schedule.msg.service.IScheduleService;
import com.Schedule.msg.model.*;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	IMemberService memService;
	@Autowired
	IScheduleService scheduleService;
	
	
	////// 화면 controller //////
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		//logger.info("Go Main", locale);		
		return "main_login";
	}
	
	@RequestMapping(value = "/hr/join")
	 public String home() {
	  //logger.info("회원가입 화면으로 이동/ 회원가입 버튼 클릭");
	  return "hr/join";
	 }
	
	// 스케줄 입력화면으로 이동
		 @RequestMapping(value= {"hr/insertCalander"}) 
		 public String moveinsertSchedule() {
			 //logger.info("스케줄 입력 폼 입장"); 
			 return "hr/insertCalander";
			 }
	
	////// Member controller //////

	@RequestMapping(value = "/hr/insertMember", method=RequestMethod.POST)	
	 public String insertMember(MemberVO mem, Model model) {
		logger.info("DB에 Member insert 완료");
		memService.insertMember(mem);
		
		return "redirect:/";
	 }

	@RequestMapping(value = "/hr/check", method=RequestMethod.GET)	
	 public String checkMember(MemberVO mem, Model model) {
		/*
		 * logger.info("[수행 필요] 입력된 값과, 멤버 DB 비교 "); memService.checkMember(mem);
		 */
		 return "redirect:/";		 
	 }	
	
	
	
	////// Schedule controller //////
	
	// 캘린더 화면 출력
	@RequestMapping(value= {"/hr/calander"}) 
	public String getAllSchedules(Model model) {
		//logger.info("Calander 화면 입장 희희");
		List<ScheduleListVO> schList = scheduleService.getScheduleList();
		model.addAttribute("schList", schList);
		return "hr/calander";
	}
	
	// 특정 스케줄 조회 (팝업창)
	@RequestMapping(value= {"/hr/{id}"}) 
	public String hello(@PathVariable int id, Model model) {	
		//logger.info("팝업창 실행");			
		ScheduleListVO schList = scheduleService.getScheduleDetail(id);
		model.addAttribute("schList", schList);
		return "hr/viewSchedule";
	}
	
	
	 
	// Schedule DB에 스케줄 데이터 저장
	@RequestMapping(value= {"/hr/insertCalander"}, method=RequestMethod.POST)
	public String insertSchedule(ScheduleListVO schList) {
		//logger.info("스케줄 DB Schedule insert");
		scheduleService.insertSchedule(schList);
		schList.toString();
		return "redirect:/hr/calander";
	}	
	
	
	// 스케줄 업데이트 _미구현
	@RequestMapping(value= {"/hr/updateCalander"}, method=RequestMethod.GET)
	public String updateSchedule(int s_id, Model model){
		//logger.info("스케줄 수정 폼 입장");
		//model.addAttribute("schList", scheduleService.getScheduleDetail(s_id));
		return "hr/insertCalander";
	}
	
	// 스케줄 업데이트 _미구현
	@RequestMapping(value= {"/hr/updateCalander"}, method=RequestMethod.POST)
	public String updateSchedule(ScheduleListVO schList, Model model) {
		logger.info("스케줄 DB Schedule update");
		scheduleService.updateSchedule(schList);
		return "redirect:hr/calander";
	}
	
	
	//스케줄 삭제_미구현
	  @RequestMapping(value= {"/hr/deleteCalander"}, method=RequestMethod.GET)
	  public String deleteSchedulea() { 
		  logger.info("스케줄 삭제 입장");
		  //int s_id,Model model
		  //model.addAttribute("schList", scheduleService.getScheduleDetail(s_id));
	  return "hr/deleteCalander"; 
	  }
	 
	 
	
	//스케줄 삭제_미구현(입장 완료)
	@RequestMapping(value= {"/hr/deleteCalander"}, method=RequestMethod.POST) // 삭제는 생각해보고 수정(하나로 합치기)해야함!!ㅠㅠ
	public String deleteSchedule() {
		//int s_id, Model model
		logger.info("Del 컨트롤러 들어왓음");
		//logger.info("스케줄 DB Schedule 삭제완료");
		//scheduleService.deleteSchedule(sid);
		return "hr/deleteCalander";
	}
	
	
	@ExceptionHandler({RuntimeException.class})
	public ModelAndView runtimeException(HttpServletRequest request, Exception ex) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("url", request.getRequestURI());
		mav.addObject("exception", ex);
		mav.setViewName("error/runtime");
		return mav;
	}	
	
 }

