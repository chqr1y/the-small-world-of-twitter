import React from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl = "https://raw.githubusercontent.com/chqr1y/twitter-locations-maps/master/ne_50m_admin_0_countries_and_twitter_woeid.json"

const Map = ({ setTooltipContent }) => (
  <div
    style={{
      "width":"90%",
      "max-width":"1200px",
      "display":"flex",
      "margin":"auto",
      "border-style":"solid",
    }}
  >
    <ComposableMap data-tip="">
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const isHighlighted =
                (geo.properties.TW_WOEID !== -1);
              return(
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "#1DA1F2" : "#BBBBBB"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    }
                  }} />
                );
              })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

export default Map;
