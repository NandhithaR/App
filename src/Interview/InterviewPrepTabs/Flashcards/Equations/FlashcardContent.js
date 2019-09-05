import {Ohms_law,Equations_nzero,Equations_nlin,Equations_nsat,Equations_pzero,Equations_plin,Equations_psat} from './EasyEquations'
import React from 'react'
import ReactDOM from 'react-dom'

export const quizData =[{
    "id": 0,
    "question": " At room temperature the current in an intrinsic semiconductor is due to ",
    "options": ["holes", "electrons", "ions", "holes and electrons"],
    "answer": "holes and electrons",
    "explaination": "Explanation"
  },
  {
    "id": 1,
    "question": "Work function is the maximum energy required by the fastest electron at 0 K to escape from the metal surface",
    "options": ["True", "False"],
    "answer": "False",
    "explaination": "Explanation"
  },
  {
    "id": 3,
    "question": "The most commonly used semiconductor material is",
    "options": ["silicon", "germanium", "mixture of silicon and germanium"],
    "answer": "silicon",
    "explaination": "Explanation"
  },
  {
    "id": 4,
    "question": "<img src=http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",
    "options": ["Zener diode", "Tunnel diode", "Schottky diode","PIN diode"],
    "answer": "Schottky diode",
    "explaination": "Explanation"
  },
  {
    "id": 5,
    "question": " What is the Capital Of India ?",
    "options": ["New Delhi", "Mumbai", "Kolkatta"],
    "answer": "New Delhi",
    "explaination": "Explanation"
  },
  {
    "id": 6,
    "question": "Who is the CEO of Tesla Motors?",
    "options": ["Bill Gates", "Steve Jobs", "Elon Musk"],
    "answer": "Elon Musk",
    "explaination": "Explanation"
  },
  {
    "id": 7,
    "question": "Name World's Richest Man?",
    "options": ["Jeff Bezo", "Bill Gates", "Mark Zuckerberg"],
    "answer": "Jeff Bezo",
    "explaination": "Explanation"
  },
  {
    "id": 8,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 9,
    "question": " What is the Capital Of India ?",
    "options": ["New Delhi", "Mumbai", "Kolkatta"],
    "answer": "New Delhi",
    "explaination": "Explanation"
  },
  {
    "id": 10,
    "question": "Who is the CEO of Tesla Motors?",
    "options": ["Bill Gates", "Steve Jobs", "Elon Musk"],
    "answer": "Elon Musk",
    "explaination": "Explanation"
  },
  {
    "id": 11,
    "question": "Name World's Richest Man?",
    "options": ["Jeff Bezo", "Bill Gates", "Mark Zuckerberg"],
    "answer": "Jeff Bezo",
    "explaination": "Explanation"
  },
  {
    "id": 12,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 13,
    "question": " What is the Capital Of India ?",
    "options": ["New Delhi", "Mumbai", "Kolkatta"],
    "answer": "New Delhi",
    "explaination": "Explanation"
  },
  {
    "id": 14,
    "question": "Who is the CEO of Tesla Motors?",
    "options": ["Bill Gates", "Steve Jobs", "Elon Musk"],
    "answer": "Elon Musk",
    "explaination": "Explanation"
  },
  {
    "id": 15,
    "question": "Name World's Richest Man?",
    "options": ["Jeff Bezo", "Bill Gates", "Mark Zuckerberg"],
    "answer": "Jeff Bezo",
    "explaination": "Explanation"
  },
  {
    "id": 16,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 17,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 18,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 19,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 20,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 21,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 22,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 23,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 24,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 25,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  },
  {
    "id": 26,
    "question": "World's Longest River?",
    "options": ["River Nile", "River Amazon", "River Godavari"],
    "answer": "River Nile",
    "explaination": "Explanation"
  }]

export const data=[
    {
    "word": "Jazz",
    "description": "A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.",
    "options":""
    },
    {
    "word": "Reggae",
    "description": "Music like Bob Marley, man."
    },
    {
    "word": "Folk",
    "description": "Music like Bob Dylan, man."
    },
    {
    "word":"First Flashcard",
    "description": "First!"
    },
    {
    "word":"Second Flashcard",
    "description":"second description"
    },
    {
    "word":"Third Flashcard",
    "description":"third description"
    },
    {
    "word":"Fourth Flashcard",
    "description":<Equations_nsat />
    },
    {
    "word":"Fifth Flashcard",
    "description":<Equations_nzero />
    },
    {
    "word":"Sixth Flashcard",
    "description":<Equations_nlin />

    }
    
]

const fillblanks=[
    {
    "question":"who is the president of India",
    "answer":""
    },
]