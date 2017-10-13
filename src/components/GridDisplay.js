import React, { Component } from 'react';

import GridBlock from './GridBlock';


class GridDisplay extends Component {


    render() {
      let fullGrid = {
        display: 'flex',
        justifyContent: 'center'
      }
        return (
            <div style={fullGrid}>
              <div>
                <GridBlock xSpot='1' ySpot='5'/>
                <GridBlock xSpot='1' ySpot='4'/>
                <GridBlock xSpot='1' ySpot='3'/>
                <GridBlock xSpot='1' ySpot='2'/>
                <GridBlock xSpot='1' ySpot='1'/>
              </div>
              <div>
                <GridBlock xSpot='2' ySpot='5'/>
                <GridBlock xSpot='2' ySpot='4'/>
                <GridBlock xSpot='2' ySpot='3'/>
                <GridBlock xSpot='2' ySpot='2'/>
                <GridBlock xSpot='2' ySpot='1'/>
              </div>
              <div>
                <GridBlock xSpot='3' ySpot='5'/>
                <GridBlock xSpot='3' ySpot='4'/>
                <GridBlock xSpot='3' ySpot='3'/>
                <GridBlock xSpot='3' ySpot='2'/>
                <GridBlock xSpot='3' ySpot='1'/>
              </div>
              <div>
                <GridBlock xSpot='4' ySpot='5'/>
                <GridBlock xSpot='4' ySpot='4'/>
                <GridBlock xSpot='4' ySpot='3'/>
                <GridBlock xSpot='4' ySpot='2'/>
                <GridBlock xSpot='4' ySpot='1'/>
              </div>
              <div>
                <GridBlock xSpot='5' ySpot='5'/>
                <GridBlock xSpot='5' ySpot='4'/>
                <GridBlock xSpot='5' ySpot='3'/>
                <GridBlock xSpot='5' ySpot='2'/>
                <GridBlock xSpot='5' ySpot='1'/>
              </div>

            </div>
        );
    }
}
export default GridDisplay;