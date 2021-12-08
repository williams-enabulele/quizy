export interface Data {
  response_code: number;
  results : {
    category: string;
    type: string;
    difficulty : string;
    question : string;
    correctAnswer : string;
    incorrect_answers : Array<string>;
}
}