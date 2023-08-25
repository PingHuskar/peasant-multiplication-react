import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(97)
  const [b, setB] = useState(343)
  const [peasantMultiplicationCalculationTable, setPeasantMultiplicationCalculationTable] = useState([])
  const [addToResult, setAddToResult] = useState([])
  const [binaStep, setBinaStep] = useState([])
  const addSym = ' + '
  useEffect(()=> {
    console.log('useEffect')
    let tr: any = []
    let tra: any = []
    let bina: any = []
    let a1: number = a
    let b1: number = b
    let isOdd: boolean
    while (a1 >= 1) {
      
      isOdd = Math.floor(a1/2) !== a1/2
      if (isOdd) {
        tr.push([a1, b1])
        tra.push(b1)
      } else {
        tr.push([a1, <s>{b1}</s>])
      }
      console.log([a1, b1])
      a1 = Math.floor(a1/2)
      b1 *= 2
    }
    console.log(tr)
    setPeasantMultiplicationCalculationTable(tr)
    setAddToResult(tra.reverse())

    a.toString(2).split('').map((b,index) => {
      if (Number(b)) {
        bina.push(Number(b) * Math.pow(2,a.toString(2).length-index-1))
      }
    })
    setBinaStep(bina)
  },[a, b])

  return (
    <>
      <div className="">
        <input type="number" min={1} value={a} onChange={(e) => {
          const n = Number(e.currentTarget.value)
          setA(n)
          if (!n) setA(1)
          }} />
        <input type="number" min={1} value={b} onChange={(e) => {
          const n = Number(e.currentTarget.value)
          setB(n)
          if (!n) setB(1)
          }} />
        <button onClick={() => {
          setA(b)
          setB(a)
        }}>
          switch
        </button>
      </div>
      <div className="" style={{display: `flex`, flexFlow: `column`}}>
        <h2>
            Peasant Multiplication
        </h2>
        <div className="" style={{display: `flex`, justifyContent: `center`, minHeight: `250px`}}>
          <div className="" style={{display: `flex`, transform: `rotate(-90deg)`, position: `absolute`, marginTop: `100px`, marginLeft: `-130px`, textTransform: `uppercase`}}>
            divided by 2
          </div>
          <div className="" style={{display: `flex`, transform: `rotate(90deg)`, position: `absolute`, marginTop: `100px`, marginLeft: `132px`, textTransform: `uppercase`}}>
            double
          </div>
          <table>
            <thead>
              <tr style={{fontWeight: `bold`}}>
                <td colSpan={2}>{a} X {b}</td>
              </tr>
            </thead>
            <tbody>
              {peasantMultiplicationCalculationTable.map((tr: any,index) => {
                return <tr key={index}>
                  <td style={{minWidth: `50px`}}>{tr.at(0)}</td>
                  <td style={{minWidth: `50px`}}>{tr.at(1)}</td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>SUM</td>
                <td>{a*b}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <hr />
      <div className="">
        <div className="">
          {a}<sub>10</sub> = {a.toString(2)}<sub>2</sub>
        </div>
        <table>
          <tr>
            {a.toString(2).split('').map((b,index) => {
              return <td key={index}>{b}</td>
            })}
          </tr>
          <tr>
            {a.toString(2).split('').map((b,index) => {
              return <td key={index}>{Number(b)} x {2}<sup>{a.toString(2).length-index-1}</sup> {a.toString(2).length-index-1 > 0  && ' + '}</td>
            })}
          </tr>
          <tr>
            {a.toString(2).split('').map((b,index) => {
              return <td key={index}>
                {Number(b) * Math.pow(2,a.toString(2).length-index-1)} {a.toString(2).length-index-1 > 0  && ' + '}
              </td>
            })}
          </tr>
        </table>
        <div className="" style={{display: `flex`}}>
          <span className="">
            {a} X {b} 
          </span>
          <ul style={{margin: `0`, paddingLeft: `5px`}}>
            <li style={{listStyleType: 'none', textAlign: `left`}}>
              = ({binaStep.join(addSym)}) X {b} 
            </li>
            <li style={{listStyleType: 'none', textAlign: `left`}}>
              = {addToResult.join(addSym)}
            </li>
            <li style={{listStyleType: 'none', textAlign: `left`}}>
              = {a*b}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
