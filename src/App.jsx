import React, { useEffect, useState } from "react";
import { supabase } from "./supabase"; // supabase.js 파일 임포트

function App() {
  const [questions, setQuestions] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from("questions") // 'questions' 테이블에서 데이터 가져오기
        .select("*"); // 모든 컬럼을 선택

      if (error) {
        console.error("Error fetching questions:", error);
      } else {
        setQuestions(data); // 데이터를 state에 저장
      }
    };

    fetchQuestions(); // 컴포넌트 마운트 시 데이터 가져오기
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question_ko} - {question.question_en} - {question.question_ja}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
