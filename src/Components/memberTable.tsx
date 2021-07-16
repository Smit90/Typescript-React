import * as React from "react";
import { MemberEntity } from "../Model/member";
import { getMemberCollection } from "../API/memberApi";

const useMemberCollection = () => {
  const [memberCollection, setMemberCollection] = React.useState<
    MemberEntity[]
  >([]);

  const loadMemberCollection = () => {
    getMemberCollection().then((memberCollection) =>
      setMemberCollection(memberCollection)
    );
  };

  return { memberCollection, loadMemberCollection };
};

export const MemberTableComponent = () => {
  const { memberCollection, loadMemberCollection } = useMemberCollection();

  React.useEffect(() => {
    loadMemberCollection();
  }, []);

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {memberCollection.map((member) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const MemberRow = ({ member }: { member: MemberEntity }) => (
  <tr>
    <td>
      <img className="img-style" alt="avatar" src={member.avatar_url} style={{ maxWidth: "10rem" }} />
    </td>
    <td>
      <span>{member.id}</span>
    </td>
    <td>
      <span>{member.login}</span>
    </td>
  </tr>
);
