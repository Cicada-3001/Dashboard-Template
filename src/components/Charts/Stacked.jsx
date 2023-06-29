import React from 'react'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

function Stacked({ width,  height }) {
  return (
    <ChartComponent
      width ={ width }
      height = { height }
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chatArea= {{ border: { width: 0 }}}
      tooltip= {{ enable: true }}
      LegendSettings= {{ background: "white"}}

    > 
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective> 
        {stackedCustomSeries.map((item, index)=> <SeriesDirective key={index} {... item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
