import React from "react";
import dynamic from "next/dynamic";

const Bracket = dynamic(
  () => {
    return import("../../components/Bracket");
  },
  { ssr: false }
);

function customBracket(bracketId: any) {
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
    fallback: true,
  };
}

export const getStaticProps = async (context: any) => {
  const bracketId = context.params.id;

  return {
    props: {
      bracketId: bracketId,
    },
    revalidate: 1, // In seconds
  };
};

export default customBracket;
