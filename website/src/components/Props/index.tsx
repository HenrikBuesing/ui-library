import React from 'react';
import './index.scss';

interface Data {
  name: string;
  value: string;
  required: boolean;
  definition: string;
}

interface Props {
  data: Data[];
}


export default function AssignableProps({ data }: Props) {
  return (
    <table className={'table'}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>required</th>
        <th>Definition</th>
      </tr>
      </thead>

      <tbody>
      {data.map(d =>
        <tr key={d.name}>
          <td>{d.name}</td>
          <td style={{ color: 'orange' }}>{d.value}</td>
          <td style={{ fontWeight: d.required ? 'bold' : 'normal' }}>{String(d.required)}</td>
          <td>{d.definition}</td>
        </tr>
      )}
      </tbody>
    </table>
  );
}