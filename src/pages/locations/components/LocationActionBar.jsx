import { Button, Input } from "antd";
import React, { useState } from "react";
import { LocationCreateModal } from "./LocationCreateModal";

export function LocationActionBar() {
  const { Search } = Input;
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <Search placeholder="Search by Name" style={{ width: "100%" }} />
      <Button onClick={() => setIsOpenModal(true)} type="primary">
        + New
      </Button>
      <LocationCreateModal
        title="New Location"
        isOpen={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
      />
    </div>
  );
}
