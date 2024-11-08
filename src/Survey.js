import React, { useCallback, useState } from 'react';
import {ReactFlow,useNodesState,useEdgesState,addEdge,} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './survey.css'; 

const question1Nodes = [
  //question-1
  { id: '1', position: { x: 600, y: 200 }, data: { label: 'Do you prefer Coffee or Tea?' }, style: { background: '#4caf50', color: '#fff' } },
 //options
  { id: '2', position: { x: 300, y: 280 }, data: { label: 'COFFEE' }, style: { background: '#ff9800', color: '#fff' } },
  { id: '3', position: { x: 900, y: 280 }, data: { label: 'TEA' }, style: { background: '#ff9800', color: '#fff' } },
  //suboptions-1
  { id: '4', position: { x: 100, y: 350 }, data: { label: 'Americano' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '5', position: { x: 300, y: 350 }, data: { label: 'Espresso' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '6', position: { x: 500, y: 350 }, data: { label: 'Affogato' }, style: { background: '#607d8b', color: '#fff' } },
  //suboptions-2
  { id: '7', position: { x: 700, y: 350 }, data: { label: 'Green Tea' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '8', position: { x: 900, y: 350 }, data: { label: 'Herbal Tea' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '9', position: { x: 1100, y: 350 }, data: { label: 'Black Tea' }, style: { background: '#607d8b', color: '#fff' } },
];

const question1Edges = [
  { id: 'e1-1', source: '1', target: '2' },
  { id: 'e1-2', source: '1', target: '3' },
  { id: 'e1-3', source: '2', target: '4' },
  { id: 'e1-4', source: '2', target: '5' },
  { id: 'e1-5', source: '2', target: '6' },
  { id: 'e1-6', source: '3', target: '7' },
  { id: 'e1-7', source: '3', target: '8' },
  { id: 'e1-8', source: '3', target: '9' }
];
const question2Nodes = [
  //question-1
  { id: '10', position: { x: 600, y: 200 }, data: { label: 'Do you prefer Cats or Dogs?' }, style: { background: '#4caf50', color: '#fff' } },
 //options
  { id: '11', position: { x: 300, y: 280 }, data: { label: 'Cats' }, style: { background: '#ff9800', color: '#fff' } },
  { id: '12', position: { x: 900, y: 280 }, data: { label: 'Dogs' }, style: { background: '#ff9800', color: '#fff' } },
  //suboptions-1
  { id: '13', position: { x: 100, y: 350 }, data: { label: 'Persian' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '14', position: { x: 300, y: 350 }, data: { label: 'Siamese' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '15', position: { x: 500, y: 350 }, data: { label: 'RagDoll' }, style: { background: '#607d8b', color: '#fff' } },
  //suboptions-2
  { id: '16', position: { x: 700, y: 350 }, data: { label: 'Poddle' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '17', position: { x: 900, y: 350 }, data: { label: 'Bull Dog' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '18', position: { x: 1100, y: 350 }, data: { label: 'Beagle' }, style: { background: '#607d8b', color: '#fff' } },
];

const question2Edges = [
  { id: 'e2-1', source: '10', target: '11' },
  { id: 'e2-2', source: '10', target: '12' },
  { id: 'e2-3', source: '11', target: '13' },
  { id: 'e2-4', source: '11', target: '14' },
  { id: 'e2-5', source: '11', target: '15' },
  { id: 'e2-6', source: '12', target: '16' },
  { id: 'e2-7', source: '12', target: '17' },
  { id: 'e2-8', source: '12', target: '18' }
];

const question3Nodes = [
  //question-1
  { id: '19', position: { x: 600, y: 200 }, data: { label: 'Do you like Hot or Cold places?' }, style: { background: '#4caf50', color: '#fff' } },
 //options
  { id: '20', position: { x: 300, y: 280 }, data: { label: 'Hot Places' }, style: { background: '#ff9800', color: '#fff' } },
  { id: '21', position: { x: 900, y: 280 }, data: { label: 'Cool Places' }, style: { background: '#ff9800', color: '#fff' } },
  //suboptions-1
  { id: '22', position: { x: 100, y: 350 }, data: { label: 'Timbuktu Mali' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '23', position: { x: 300, y: 350 }, data: { label: 'Qibilī' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '24', position: { x: 500, y: 350 }, data: { label: 'Mitribah, kuwait' }, style: { background: '#607d8b', color: '#fff' } },
  //suboptions-2
  { id: '25', position: { x: 700, y: 350 }, data: { label: 'Goa' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '26', position: { x: 900, y: 350 }, data: { label: 'Shimla' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '27', position: { x: 1100, y: 350 }, data: { label: 'Manali' }, style: { background: '#607d8b', color: '#fff' } },
];

const question3Edges = [
  { id: 'e3-1', source: '19', target: '20' },
  { id: 'e3-2', source: '19', target: '21' },
  { id: 'e3-3', source: '20', target: '22' },
  { id: 'e3-4', source: '20', target: '23' },
  { id: 'e3-5', source: '20', target: '24' },
  { id: 'e3-6', source: '21', target: '25' },
  { id: 'e3-7', source: '21', target: '26' },
  { id: 'e3-8', source: '21', target: '27' }
];
const question4Nodes = [
  //question-1
  { id: '28', position: { x: 600, y: 200 }, data: { label: 'Do you like Fruits or  Vegetables?' }, style: { background: '#4caf50', color: '#fff' } },
 //options
  { id: '29', position: { x: 300, y: 280 }, data: { label: 'Fruits' }, style: { background: '#ff9800', color: '#fff' } },
  { id: '30', position: { x: 900, y: 280 }, data: { label: 'Vegetables' }, style: { background: '#ff9800', color: '#fff' } },
  //suboptions-1
  { id: '31', position: { x: 40, y: 350 }, data: { label: 'Kiwi' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '32', position: { x: 220, y: 350 }, data: { label: 'Mango' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '33', position: { x: 390, y: 350 }, data: { label: 'Orange' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '34', position: { x: 570, y: 350 }, data: { label: 'Guava' }, style: { background: '#607d8b', color: '#fff' } },
  
  //suboptions-2
  { id: '35', position: { x: 800, y: 350 }, data: { label: 'Brinjal' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '36', position: { x: 980, y: 350 }, data: { label: 'Onion' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '37', position: { x: 1180, y: 350 }, data: { label: 'Tomato' }, style: { background: '#607d8b', color: '#fff' } },
 
];

const question4Edges = [
  { id: 'e4-1', source: '28', target: '29' },
  { id: 'e4-2', source: '28', target: '30' },
  { id: 'e4-3', source: '29', target: '31' },
  { id: 'e4-4', source: '29', target: '32' },
  { id: 'e4-5', source: '29', target: '33' },
  { id: 'e4-6', source: '29', target: '34' },
  { id: 'e4-7', source: '30', target: '35' },
  { id: 'e4-8', source: '30', target: '36' },
  { id: 'e4-9', source: '30', target: '37' },
  
];
const question5Nodes = [
  //question-1
  { id: '38', position: { x: 600, y: 200 }, data: { label: 'Do you like Frontend or Backend Technologies?' }, style: { background: '#4caf50', color: '#fff' } },
 //options
  { id: '39', position: { x: 300, y: 280 }, data: { label: 'Frontend' }, style: { background: '#ff9800', color: '#fff' } },
  { id: '40', position: { x: 900, y: 280 }, data: { label: 'Backend' }, style: { background: '#ff9800', color: '#fff' } },
  //suboptions-1
  { id: '41', position: { x: 100, y: 350 }, data: { label: 'HTML' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '42', position: { x: 300, y: 350 }, data: { label: 'ReactJS' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '43', position: { x: 500, y: 350 }, data: { label: 'VueJS' }, style: { background: '#607d8b', color: '#fff' } },
  //suboptions-2
  { id: '44', position: { x: 700, y: 350 }, data: { label: 'Java' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '45', position: { x: 900, y: 350 }, data: { label: 'Python' }, style: { background: '#607d8b', color: '#fff' } },
  { id: '46', position: { x: 1100, y: 350 }, data: { label: 'Ruby' }, style: { background: '#607d8b', color: '#fff' } },
];
const question5Edges = [
  { id: 'e5-1', source: '38', target: '39' },
  { id: 'e5-2', source: '38', target: '40' },
  { id: 'e5-3', source: '39', target: '41' },
  { id: 'e5-4', source: '39', target: '42' },
  { id: 'e5-5', source: '39', target: '43' },
  { id: 'e5-6', source: '40', target: '44' },
  { id: 'e5-7', source: '40', target: '45' },
  { id: 'e5-8', source: '40', target: '46' }
];


export default function Survey() {
  const [questionStep, setQuestionStep] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showSummaryPage, setShowSummaryPage] = useState(false);

  const [nodes, setNodes, onNodesChange] = useNodesState(question1Nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(question1Edges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleNextQuestion = () => {
    if (questionStep === 1) {
      setQuestionStep(2);
      setNodes(question2Nodes);
      setEdges(question2Edges);
    } else if (questionStep === 2) {
      setQuestionStep(3);
      setNodes(question3Nodes);
      setEdges(question3Edges);
    } else if (questionStep === 3) {
      setQuestionStep(4);
      setNodes(question4Nodes);
      setEdges(question4Edges);
    } else if (questionStep === 4) {
      setQuestionStep(5);
      setNodes(question5Nodes);
      setEdges(question5Edges);
    } else {
      setShowSummaryPage(true); 
    }
  };

  const handleSubOptionSelect = (nodeId) => {
     const currentQuestionLabel = 
      questionStep === 1 ? "Do you prefer Coffee or Tea?" :
      questionStep === 2 ? "Do you prefer Cats or Dogs?" :
      questionStep === 3 ? "Do you like Hot or Cold places?" :
      questionStep === 4 ? "Do you Fruits or Vegetables?" : 
      questionStep === 5 ? "Do you like Frontend or Backend Technologies?" : ""; 
   
    const selectedOption = nodes.find((node) => node.id === nodeId);
    if (selectedOption) {
       setSelectedAnswers((prevAnswers) => [
        ...prevAnswers,
        { question: currentQuestionLabel, answer: selectedOption.data.label }
      ]);
    }
   handleNextQuestion();
  };
  

  const handleRestartQuiz = () => {
    setQuestionStep(1);
    setSelectedAnswers([]);
    setShowSummaryPage(false);
    setNodes(question1Nodes);
    setEdges(question1Edges);
  };

  return (
    <div className="app-container">
     
      {!showSummaryPage ? (
        <>
    
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={(event, node) => {
              if (node.id > '3' && questionStep === 1) {
                handleSubOptionSelect(node.id);
              } else if (node.id > '12' && questionStep === 2) {
                handleSubOptionSelect(node.id);
              } else if (node.id > '16' && questionStep === 3) {
                handleSubOptionSelect(node.id);
              } else if (node.id > '20' && questionStep === 4) {
                handleSubOptionSelect(node.id);
              } else if (node.id > '24' && questionStep === 5) {
                handleSubOptionSelect(node.id);
              }
            }}
            className="react-flow-container"
          />
          {questionStep <= 5 && (
            <button onClick={handleNextQuestion} className="next-question-button">Next Question</button>
          )}
        </>
      ) : (
        <div className="summary-container">
          <h2>Your Preferences!</h2>
          <ul className="summary-list">
            {selectedAnswers.map((answer, index) => (
              <li key={index} className="summary-item">
                <strong>{answer.question}:</strong> {answer.answer}
              </li>
            ))}
          </ul>
          <button onClick={handleRestartQuiz} className="restart-button">Restart </button>
        </div>
      )}
    </div>
  );
}
