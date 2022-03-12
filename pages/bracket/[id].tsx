import React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Input, Text, Button } from "@nextui-org/react";
import Link from "next/link";
import GROUPA from "../../components/lib/data/groupA.json";
import GROUPB from "../../components/lib/data/groupB.json";
import GROUPC from "../../components/lib/data/groupC.json";
import GROUPD from "../../components/lib/data/groupD.json";
import FINALGROUP from "../../components/lib/data/finalGroup.json";

import { BracketForm } from "../../components/BracketForm";

import { BracketData } from "../../components/lib/types";

const Bracket = dynamic(
  () => {
    return import("../../components/Bracket");
  },
  { ssr: false }
);

export default function CustomBracket(bracketId: any) {
  const data: BracketData = { form_data: {} };
  const [formState, setFormState] = useState(data.form_data);
  const handleFormChanged = (value: Record<string, string>) => {
    setFormState(value);
  };

  return (
    <>
      <Box>
        <Bracket />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Text
          h3
          size={30}
          css={{
            textGradient: "45deg, $blue500 -20%, $gray500 50%",
          }}
          weight="bold"
        >
          SELECT YOUR WINNERS
        </Text>
        <br /> <br /> <br />
      </Box>
      <BracketForm formData={formState} onChange={handleFormChanged} />
      <br /> <br /> <br />
      <Box height="100vh">MUSIC PLAYER </Box>
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
