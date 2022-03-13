import {
  SingleEliminationBracket,
  SVGViewer,
  Match,
} from "@g-loot/react-tournament-brackets";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { dataA, dataB, dataC, dataD, finalFour } from "./lib/data/structure";
import { loadTeams } from "./lib/ops";

export default function Bracket() {
  useEffect(() => {
    loadTeams();
  }, []);
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <SingleEliminationBracket
            matches={dataA} //////////////////// GROUP A   ////////////////////
            matchComponent={Match} //  :TODO ONCLICK SELECTION AND TITLES*/
            /* matchComponent={({
          match,
          onMatchClick,
          onPartyClick,
          onMouseEnter,
          onMouseLeave,
          topParty,
          bottomParty,
          topWon,
          bottomWon,
          topHovered,
          bottomHovered,
          topText,
          bottomText,
          connectorColor,
          computedStyles,
          teamNameFallback,
          resultFallback,
        }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              color: "#000",
              width: "50%",
              height: "50%",
            }}
          >
            <div
              onMouseEnter={() => onMouseEnter(topParty.id)}
              style={{ display: "flex" }}
            >
              <div>{topParty.name || teamNameFallback}</div>
              <div>{topParty.resultText ?? resultFallback(topParty)}</div>
            </div>
            <div
              style={{ height: "1px", width: "100%", background: "#FF8C00" }}
            />
            <div
              onMouseEnter={() => onMouseEnter(bottomParty.id)}
              style={{ display: "flex" }}
            >
              <div>{bottomParty.name || teamNameFallback}</div>
              <div>{bottomParty.resultText ?? resultFallback(topParty)}</div>
            </div>
          </div>
        )} */
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                width={window.innerWidth / 2}
                height={window.innerHeight / 2}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
          <SingleEliminationBracket
            matches={dataB}
            matchComponent={Match}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                width={window.innerWidth / 2}
                height={window.innerHeight / 2}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
        </Box>
        <Box display="flex" flexDirection="row">
          <SingleEliminationBracket
            matches={dataC}
            matchComponent={Match} //  :TODO ONCLICK SELECTION AND TITLES*/
            /* matchComponent={({
          match,
          onMatchClick,
          onPartyClick,
          onMouseEnter,
          onMouseLeave,
          topParty,
          bottomParty,
          topWon,
          bottomWon,
          topHovered,
          bottomHovered,
          topText,
          bottomText,
          connectorColor,
          computedStyles,
          teamNameFallback,
          resultFallback,
        }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              color: "#000",
              width: "50%",
              height: "50%",
            }}
          >
            <div
              onMouseEnter={() => onMouseEnter(topParty.id)}
              style={{ display: "flex" }}
            >
              <div>{topParty.name || teamNameFallback}</div>
              <div>{topParty.resultText ?? resultFallback(topParty)}</div>
            </div>
            <div
              style={{ height: "1px", width: "100%", background: "#FF8C00" }}
            />
            <div
              onMouseEnter={() => onMouseEnter(bottomParty.id)}
              style={{ display: "flex" }}
            >
              <div>{bottomParty.name || teamNameFallback}</div>
              <div>{bottomParty.resultText ?? resultFallback(topParty)}</div>
            </div>
          </div>
        )} */
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                width={window.innerWidth / 2}
                height={window.innerHeight / 2}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
          <SingleEliminationBracket
            matches={dataD}
            matchComponent={Match}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                width={window.innerWidth / 2}
                height={window.innerHeight / 2}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
        </Box>
      </Box>
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <SingleEliminationBracket
          matches={finalFour}
          matchComponent={Match}
          svgWrapper={({ children, ...props }) => (
            <SVGViewer
              width={window.innerWidth / 2}
              height={window.innerHeight / 2}
              {...props}
            >
              {children}
            </SVGViewer>
          )}
        />
      </Box>
    </>
  );
}
