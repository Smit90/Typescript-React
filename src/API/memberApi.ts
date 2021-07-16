import { MemberEntity } from "../Model/member";
import Axios, { AxiosResponse } from "axios";

const gitHubUrl = "https://api.github.com";
const gitHubMembersUrl = `${gitHubUrl}/users/Umesh11032000/followers`;

export const getMemberCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    try {
      Axios.get<MemberEntity[]>(gitHubMembersUrl).then((response) =>
        resolve(mapMemberListApiToModel(response))
      );
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};

const mapMemberListApiToModel = ({
  data,
}: AxiosResponse<any[]>): MemberEntity[] =>
  data.map((gitHubMember) => ({
    id: gitHubMember.id,
    login: gitHubMember.login,
    avatar_url: gitHubMember.avatar_url,
  }));
