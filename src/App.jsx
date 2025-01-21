import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      console.log("Fetching started");
      const { data, error } = await supabase.from("questions").select("*");
      console.log("Raw response:", { data, error });

      if (error) {
        console.error("Error:", error);
        setError(error.message);
      } else {
        console.log("Data received:", data);
        setQuestions(data);
      }
      setIsLoading(false);
    };

    fetchQuestions();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question_ko} - {question.question_en} - {question.question_jp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
