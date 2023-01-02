import { Button, Input } from "antd";
import React, { useState } from "react";
import { PositionCreateModal } from "./PositionCreateModal";

export function PositionActionBar() {
  const { Search } = Input;
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <Search placeholder="Search by Name" style={{ width: "100%" }} />
      <Button onClick={() => setIsOpenModal(true)} type="primary">
        + New
      </Button>
      <PositionCreateModal
        title="New Position"
        isOpen={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
      />
    </div>
  );
}
