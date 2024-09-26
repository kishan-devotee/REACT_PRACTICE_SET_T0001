import React from "react";
import "./App.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import type { UploadFile } from "antd";

const fileList: UploadFile[] = [];

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
        defaultFileList={fileList}
      >
        <Button type="primary" icon={<UploadOutlined />}>
          Upload
        </Button>
      </Upload>
    </header>
  </div>
);

export default App;
