package com.skilldistillery.skillguild.services;

import java.util.List;

import com.skilldistillery.skillguild.entities.Guild;
import com.skilldistillery.skillguild.entities.Question;

public interface QuestionService {

	List<Question> index();
	Question show(int qid);
	Question create(int qid, Question question);
	Question update(int qid, Question question);
	boolean delete(int qid);
}