import React, { useState } from "react";
import { Button, Card, Input, Space } from "antd";

const TodoList: React.FC = () => {
  const [todoStore, setTodoStore] = useState<string[]>(() => {
    const storedTodos = localStorage.getItem("TodoLocalStore");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (inputValue.trim()) {
      const updatedTodos: string[] = [...todoStore, inputValue.trim()];
      setTodoStore(updatedTodos);
      localStorage.setItem("TodoLocalStore", JSON.stringify(updatedTodos));
      setInputValue("");
    }
  };

  const handleDelete = (e: any) => {
    let eleDelete = e.target.id;
    todoStore.splice(eleDelete, 1);
    setTodoStore([...todoStore]);
    localStorage.setItem("TodoLocalStore", JSON.stringify(todoStore));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="To-Do"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            required
          />
          <button type="submit">
            <Button type="primary">Add</Button>
          </button>
        </form>
      </div>

      {todoStore.map((todo: string, index: number) => (
        <Space direction="vertical" size={16} style={{ margin: "20px" }}>
          <Card
            title="To-Do"
            extra={
              <Button
                type="dashed"
                id={index.toString()}
                onClick={handleDelete}
                danger
              >
                Delete
              </Button>
            }
            style={{ width: 300 }}
          >
            <p>{todo}</p>
          </Card>
        </Space>
      ))}
    </div>
  );
};

export default TodoList;
