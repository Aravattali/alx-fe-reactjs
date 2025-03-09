import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders the TodoList component', () => {
        render( < TodoList / > );
        const todoList = screen.getByText(/todo list/i);
        expect(todoList).toBeInTheDocument();
    });

    test('displays initial todos', () => {
        render( < TodoList / > );
        const todoItems = screen.getAllByRole('listitem');
        expect(todoItems).toHaveLength(3);
    });

    test('adds a new todo', () => {
        render( < TodoList / > );
        const input = screen.getByPlaceholderText('Add a new todo');
        const button = screen.getByText('Add Todo');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        const newTodo = screen.getByText('New Todo');
        expect(newTodo).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render( < TodoList / > );
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render( < TodoList / > );
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        const todoItem = screen.queryByText('Learn React');
        expect(todoItem).not.toBeInTheDocument();
    });
});