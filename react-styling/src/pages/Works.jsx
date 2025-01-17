import React from "react";
import { Link, useParams } from 'react-router-dom';

const data = [
  { id: 1, todo: '리액트 배우기' },
  { id: 2, todo: 'Node.js 배우기' },
  { id: 3, todo: 'Next.js 배우기' },
  { id: 4, todo: 'Spring 배우기' },
  { id: 5, todo: '파이어 베이스 배우기' },
  { id: 6, todo: '자바스크립트 배우기' },
]

const Works = () => {
  return (
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{ cursor: 'pointer' }}> - Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  )
};

export default Works;