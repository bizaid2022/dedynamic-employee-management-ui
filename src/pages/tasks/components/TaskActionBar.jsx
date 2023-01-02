import { Button } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { TaskCreateModal } from "./TaskCreateModal";

export function TaskActionBar() {
  const [isOpen, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <Search placeholder="Search" style={{ width: "100%" }} />
      <Button
        onClick={() => {
          setIsOpenModal(true);
        }}
        type="primary"
      >
        + New
      </Button>
      <TaskCreateModal
        title="New Task"
        isOpen={isOpen}
        onCancel={() => setIsOpenModal(false)}
      />
    </div>
  );
}
