import { useState } from "react";
import CreateMemberForm from "../components/CreateMemberForm";

export default function CreatePage() {
  const [team, setTeam] = useState([]);

  const handleAddMember = (member) => {
    setTeam((prev) => [member, ...prev]);
    console.log("New member added:", member);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <CreateMemberForm onAddMember={handleAddMember} />
    </div>
  );
}
