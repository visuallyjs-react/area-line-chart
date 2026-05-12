import {useState} from 'react';
import {charts} from "./examples"
import CodeViewer from './CodeViewer';

export function App() {

    const [viewingOptions, setViewingOptions] = useState(null);


    return <div className="vjs-area-line-chart">
          {charts.map((chart, index) => (
              <div key={index} className="vjs-chart-example">
                  <div className="vjs-chart-header">
                      <div className="vjs-chart-example-title">{chart.desc}</div>
                      <button
                          className="show-code-btn"
                          onClick={() => setViewingOptions(chart.options)}
                          style={{
                              padding: '4px 8px',
                              fontSize: '12px',
                              cursor: 'pointer',
                              backgroundColor: '#f0f0f0',
                              border: '1px solid #ccc',
                              borderRadius: '4px'
                          }}
                      >
                          Show me the code
                      </button>
                  </div>
                  {chart.render("vjs-chart-example-container")}
              </div>
          ))}

        {viewingOptions && (
            <CodeViewer
                options={viewingOptions}
                onClose={() => setViewingOptions(null)}
            />
        )}
  </div>
}
