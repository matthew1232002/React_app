import { CenteredLayout } from '~/components';
import React from 'react';
import { QuestionOrAnswer } from '~/pages/types';
import {QNA} from '~/pages/constants';

const QnaRender: React.FC<QuestionOrAnswer> = ({ question, answer }) => {
  if (question) {
    return <h3 className="font-bold text-lg">{question}</h3>;
  }
  return <p className="mb-2">{answer}</p>;
};

export const Refactor2 = () => {
  return (
    <CenteredLayout className="gap-2">
      <div className="text-3xl mb-2">See the code</div>
      {QNA.map((item, index) => (
        <QnaRender key={`list-item-${index}`} {...item} />
      ))}
    </CenteredLayout>
  );
};
