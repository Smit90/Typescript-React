import { MemberEntity } from "../Model/member";

export const getMemberCollection = (): Promise<MemberEntity[]> => {
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 45687440,
            login: "Smit90",
            avatar_url: "https://avatars.githubusercontent.com/u/45687440?v=3",
          },
          {
            id: 15198053,
            login: "Sabhadiya-4",
            avatar_url: "https://avatars.githubusercontent.com/u/15198053?v=3",
          },
        ]),
      500
    );
  });

  return promise;
};
