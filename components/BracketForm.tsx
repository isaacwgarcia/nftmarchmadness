import * as React from "react";
import { Input, Button } from "@nextui-org/react";
import { Box } from "@mui/material";
import Link from "next/link";
export interface BracketFormProps {
  formData: Record<string, string>;

  onChange: (value: Record<string, string>) => void;
}

export const BracketForm: React.FC<BracketFormProps> = ({
  formData,
  onChange,
}) => {
  const [formState, setFormState] = React.useState(formData);
  React.useEffect(() => {
    onChange(formState);
  }, [formState]);

  return (
    <Box display="flex" flexDirection="column" flexWrap="nowrap">
      <Box display="flex" justifyContent="center" alignContent="center">
        <Box display="flex" flexDirection="column">
          <Input
            value={formState["game111"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game111"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 111"
          />
          <Input
            value={formState["game112"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game112"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 112"
          />
          <Input
            value={formState["game113"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game113"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 113"
          />
          <Input
            value={formState["game114"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game114"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 114"
          />
          <Input
            value={formState["game115"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game115"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 115"
          />
          <Input
            value={formState["game116"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game116"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 116"
          />
          <Input
            value={formState["game117"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game117"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 117"
          />
          <Input
            value={formState["game118"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game118"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 118"
          />
          <Input
            value={formState["game121"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game121"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 121"
          />
          <Input
            value={formState["game122"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game122"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 122"
          />
          <Input
            value={formState["game123"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game123"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 123"
          />
          <Input
            value={formState["game124"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game124"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 124"
          />
          <Input
            value={formState["game131"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game131"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 131"
          />
          <Input
            value={formState["game132"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game132"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 132"
          />
          <Input
            value={formState["game141"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game141"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game 141"
          />
        </Box>{" "}
        &nbsp;&nbsp;
        <Box display="flex" flexDirection="column">
          <Input
            value={formState["game211"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game211"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  211"
          />
          <Input
            value={formState["game212"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game212"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  212"
          />
          <Input
            value={formState["game213"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game213"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  213"
          />
          <Input
            value={formState["game214"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game214"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  214"
          />
          <Input
            value={formState["game215"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game215"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  215"
          />
          <Input
            value={formState["game216"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game216"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  216"
          />
          <Input
            value={formState["game217"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game217"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  217"
          />
          <Input
            value={formState["game218"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game218"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  218"
          />
          <Input
            value={formState["game221"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game221"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  221"
          />
          <Input
            value={formState["game222"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game222"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  222"
          />
          <Input
            value={formState["game223"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game223"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  223"
          />
          <Input
            value={formState["game224"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game224"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  224"
          />
          <Input
            value={formState["game231"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game231"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  231"
          />
          <Input
            value={formState["game232"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game232"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  232"
          />
          <Input
            value={formState["game241"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game241"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  241"
          />
        </Box>
        &nbsp;&nbsp;
        <Box display="flex" flexDirection="column">
          <Input
            value={formState["game311"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game311"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  311"
          />
          <Input
            value={formState["game312"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game312"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  312"
          />
          <Input
            value={formState["game313"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game313"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  313"
          />
          <Input
            value={formState["game314"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game314"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  314"
          />
          <Input
            value={formState["game315"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game315"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  315"
          />
          <Input
            value={formState["game316"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game316"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  316"
          />
          <Input
            value={formState["game317"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game317"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  317"
          />
          <Input
            value={formState["game318"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game318"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  318"
          />
          <Input
            value={formState["game321"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game321"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  321"
          />
          <Input
            value={formState["game322"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game322"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  322"
          />
          <Input
            value={formState["game323"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game323"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  323"
          />
          <Input
            value={formState["game324"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game324"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  324"
          />
          <Input
            value={formState["game331"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game331"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  331"
          />
          <Input
            value={formState["game332"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game332"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  332"
          />
          <Input
            value={formState["game341"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game341"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  341"
          />
        </Box>
        &nbsp;&nbsp;
        <Box display="flex" flexDirection="column">
          <Input
            value={formState["game411"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game411"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  411"
          />
          <Input
            value={formState["game412"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game412"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  412"
          />
          <Input
            value={formState["game413"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game413"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  413"
          />
          <Input
            value={formState["game414"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game414"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  414"
          />
          <Input
            value={formState["game415"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game415"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  415"
          />
          <Input
            value={formState["game416"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game416"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  416"
          />
          <Input
            value={formState["game417"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game417"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  417"
          />
          <Input
            value={formState["game418"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game418"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  418"
          />
          <Input
            value={formState["game421"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game421"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  421"
          />
          <Input
            value={formState["game422"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game422"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  422"
          />
          <Input
            value={formState["game423"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game423"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  423"
          />
          <Input
            value={formState["game424"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game424"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  424"
          />
          <Input
            value={formState["game431"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game431"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  431"
          />
          <Input
            value={formState["game432"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game432"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  432"
          />
          <Input
            value={formState["game441"] || ""}
            onChange={(ev) =>
              setFormState({
                ...formState,
                ["game441"]: ev.target.value,
              })
            }
            clearable
            underlined
            label="Game  441"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Input
          value={formState["game41"] || ""}
          onChange={(ev) =>
            setFormState({
              ...formState,
              ["game41"]: ev.target.value,
            })
          }
          clearable
          underlined
          label="Game  41"
        />
        <Input
          value={formState["game42"] || ""}
          onChange={(ev) =>
            setFormState({
              ...formState,
              ["game42"]: ev.target.value,
            })
          }
          clearable
          underlined
          label="Game  42"
        />
        <Input
          value={formState["game51"] || ""}
          onChange={(ev) =>
            setFormState({
              ...formState,
              ["game51"]: ev.target.value,
            })
          }
          clearable
          underlined
          label="Game  51"
        />
      </Box>
      <br /> <br /> <br />
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Button disabled={false} auto shadow>
          <Link href="/dashboard">
            <a>Go Back</a>
          </Link>
        </Button>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Button
          disabled={false}
          auto
          shadow
          onClick={() => {
            console.log("VALORES> ", formState);
          }}
        >
          Upload Your Results
        </Button>
      </Box>
    </Box>
  );
};
