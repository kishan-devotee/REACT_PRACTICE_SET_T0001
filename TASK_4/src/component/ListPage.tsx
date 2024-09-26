import { useState } from "react";
import { List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const ListPage = () => {
  const [count, setCount] = useState<string>("->");
  return (
    <div>
      <List
        header={<div>List Down</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>{count}</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListPage;
