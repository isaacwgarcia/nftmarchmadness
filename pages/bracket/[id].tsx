import React from "react";
import { loadTeams } from "../../components/lib/ops";
import dynamic from "next/dynamic";

const Bracket = dynamic(
  () => {
    return import("../../components/Bracket");
  },
  { ssr: false }
);

function customBracket(bracketId: any) {
  loadTeams();
  return (
    <>
      <div>
        <Bracket />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}

export const getStaticProps = async (context: any) => {
  const bracketId = context.params.id;

  return {
    props: {
      bracketId: bracketId,
    },
    revalidate: 10, // In seconds
  };
};

export default customBracket;
