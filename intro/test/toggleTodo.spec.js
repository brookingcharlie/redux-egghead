import {expect} from 'chai';
import toggleTodo from '../src/toggleTodo';

describe('toggleTodo', () => {
  it('toggles incomplete todo', () => {
    const input = {id: 0, text: 'Learn Redux', completed: false};
    const expectedOutput = {id: 0, text: 'Learn Redux', completed: true};
    expect(toggleTodo(input)).to.eql(expectedOutput);
  });
  it('toggles complete todo', () => {
    const input = {id: 1, text: 'Learn React', completed: true};
    const expectedOutput = {id: 1, text: 'Learn React', completed: false};
    expect(toggleTodo(input)).to.eql(expectedOutput);
  });
  it('does not mutate input', () => {
    const input = {id: 2, text: 'Learn Flux', completed: true};
    const unchangedInput = {id: 2, text: 'Learn Flux', completed: true};
    toggleTodo(input);
    expect(input).to.eql(unchangedInput);
  });
});
