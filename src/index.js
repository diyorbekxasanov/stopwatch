//sekundamer yarataman o'zim
import ReactDom from 'react-dom'
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

class Sekundamer extends Component {

  state={
    hour:0,
    minut:0,
    sekund:0,
    bool:false,
    stop:'',
    saveArray:[]
  }

  StartChange=()=>{
    this.setState({
      bool:true
    })
    let a = setInterval(() => {
      const {hour,minut,sekund,}=this.state

      if (sekund===59) {
        if (minut===59) {
          this.setState({
            hour:hour+1,
            minut:0,
            sekund:0
          })
        }else{
          this.setState({
            minut:minut+1,
            sekund:0
          })
        }
      }else{
        this.setState({
          sekund:sekund+1
        })
      }
    },1000);  

    this.setState({
      stop:a
    })

  }

  StopChange=()=>{

    clearInterval(this.state.stop)
    this.setState({
      bool:false
    })

  }

  SaveChange=()=>{
    const{saveArray,hour,minut,sekund}=this.state
    saveArray.push(hour+':'+minut+':'+sekund)
    this.setState({
      saveArray,
    })
  }

  clearChange=()=>{
    this.StopChange()
    this.setState({
      hour:0,
      minut:0,
      sekund:0,
      saveArray:[]
    })
  }

  render() {
    const {hour,minut,sekund,bool,saveArray}=this.state
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3">
              <div className="card">
                <div className="card-header text-center">
                  <h1>Sekundamer</h1>
                </div>
                <div className="card-body text-center">
                  <h1>{hour}:{minut}:{sekund}</h1>
                </div>
                <div className="card-footer">
                  <div className="row ">
                    <div className="col-md-3">
                      <button className="btn btn-success" onClick={this.StartChange} disabled={bool}>start</button>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-warning" onClick={this.StopChange}>stop</button>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-info" onClick={this.SaveChange} disabled={!bool}>save</button>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-danger" onClick={this.clearChange}>clear</button>
                    </div>
                  </div>
                </div>
              </div>
              {
                saveArray.map((item,index)=>

                  <p key={index}> {bool?item:''} </p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <Sekundamer/>,
  document.getElementById("root")
)



































// import React, { Component } from 'react'
// import ReactDom from 'react-dom'
// import "bootstrap/dist/css/bootstrap.min.css"
// class Index extends Component {
//   state={
//     hour:0,
//     minut:0,
//     sekund:0,
//     bolean:false,
//     stop:``,
//     interval:[]
//   }
//   addStart=()=>{
//     this.setState ({
//       bolean:true
//     })
//     let a = setInterval(() => {
//     const {hour,minut,sekund}=this.state
//       if(sekund===59){
//         if(minut===59){
//           this.setState({
//             sekund:0,
//             minut:0,
//             hour:hour+1
//           })
//         }else{
//           this.setState({
//             sekund:0,
//             minut:minut+1
//           })
//         }
//       }else{
//         this.setState({
//           sekund:sekund+1
//         })
//       }
//     }, 1000);
//     this.setState({
//       stop:a
//     })
//   }

//   addStop=()=>{
//     clearInterval(this.state.stop)
//     this.setState({
//       bolean:false
//     })
//   }

//   addInterval=()=>{
//     const {hour,minut,sekund,interval}=this.state
//     interval.push(hour+`:`+minut+`:`+sekund)
//     this.setState({
//       interval,
//     })
//   }
//   clear=()=>{
//     this.addStop()

//     this.setState({
//       hour:0,
//       minut:0,
//       sekund:0,
//       interval:[]
//     })
//   }
//   render() {
//     const {hour,minut,sekund,bolean}=this.state
//     return (
//       <div>
//         <div className="container">
//           <div className="row mt-5">
//             <div className="col-md-6 offset-3">
//               <div className="card">
//                 <div className="card-header">
//                   <h2 className={"text-center"}>Sekundamer</h2>    
//                 </div>
//                 <div className="card-body">
//                   <h2 className={"text-center"}>{hour}:{minut}:{sekund} </h2>
//                 </div>
//                 <div className="card-footer">
//                   <div className="row">
//                     <div className="col-md-3 text-center">
//                       <button className="btn btn-success" onClick={this.addStart} disabled={this.state.bolean}>Start</button>
//                     </div>
//                     <div className="col-md-3 text-center">
//                       <button className="btn btn-warning" onClick={this.addStop}>Stop</button>
//                     </div>
//                     <div className="col-md-3 text-center">
//                       <button className="btn btn-info" onClick={this.addInterval}>IntervalSave</button>
//                     </div>
//                     <div className="col-md-3 text-center">
//                       <button className="btn btn-danger" onClick={this.clear}>Clear</button>
//                     </div>
//                   </div>
//                 </div>
//                 {
//                   this.state.interval.map((item,index)=>
//                   <ul className="list-group" key={index}>
//                     <li className="list-group-item">{item} </li>
//                   </ul> )
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
































































// // import React, { Component } from 'react'
// // import ReactDom from "react-dom"
// // import "bootstrap/dist/css/bootstrap.min.css"
// // class Index extends Component {
// //   state={
// //     hour:0,
// //     minut:0,
// //     sekund:0,
// //     millisekund:0,
// //     bol:false,
// //     interval:``,
// //     arinterval:[]
// //   }
// //   addStart=()=>{
// //     this.setState({
// //       bol:true
// //     })
// //     let a = setInterval(() => {

// //       const {hour,minut,sekund,millisekund} = this.state;

// //       if(millisekund===59){
// //         if(sekund===59){
// //           if(minut===59){
// //             this.setState({
// //               millisekund:0,
// //               sekund:0,
// //               minut:0,
// //               hour:hour+1

// //             })
// //           }else{
// //             this.setState({
// //               millisekund:0,
// //               sekund:0,
// //               minut:minut+1
// //             })
// //           }
// //         }else{
// //           this.setState({
// //             millisekund:0,
// //             sekund:sekund+1
// //           })
// //         }

// //       }else{
// //         this.setState({
// //           millisekund:millisekund+1
// //         })
// //       }
// //     },1000)

// //     this.setState({
// //       interval:a
// //     })

// //   }

// //   addStop=()=>{
// //     clearInterval(this.state.interval)
// //     this.setState({
// //       bol:false
// //     })
// //   }

// //   addInterval=()=>{
// //     const {arinterval,hour,minut,millisekund,sekund} = this.state
// //     arinterval.push(hour+`:`+minut+`:`+sekund+`:`+millisekund)
// //     this.setState({
// //       arinterval
// //     })

// //   }

// //   addClear=()=>{
// //     this.setState({
// //       hour:0,
// //       minut:0,
// //       sekund:0,
// //       millisekund:0
// //     })
// //   }

// //   render() {
// //     const {hour,minut,sekund,bol,millisekund} = this.state
// //     return (
// //       <div>
// //         <div className="container">
// //           <div className="row mt-5">
// //             <div className="col-md-6 offset-3">
// //               <div className="card">
// //                 <div className="card-header">
// //                   <h1 className={"text-center"}>Sekundamer</h1>
// //                 </div>
// //                 <div className="card-body">
// //                   <h2 className={"text-center"}>{hour}:{minut}:{sekund}:{millisekund} </h2>
// //                 </div>
// //                 <div className="card-footer">
// //                   <div className="row d-flex justify-content-between">
// //                     <div className="col-md-3 text-center">
// //                       <button className="btn btn-success" onClick={this.addStart} disabled={bol}>Start</button>
// //                     </div>
// //                     <div className="col-md-3 text-center">
// //                       <button className="btn btn-warning" onClick={this.addStop}>Stop</button>
// //                     </div>
// //                     <div className="col-md-3 text-center">
// //                       <button className="btn btn-info" onClick={this.addInterval} disabled={!bol}>Interval</button>
// //                     </div>
// //                     <div className="col-md-3 text-center">
// //                       <button className="btn btn-danger" onClick={this.addClear}>Clear</button>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 {
// //                   this.state.arinterval.map((item,index)=>
// //                   <ul className={"list-group list-group-flush"} key={index}> 
// //                     <li className={"list-group-item"}>{item} </li>
// //                   </ul> )
// //                 }
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }
// // }


// ReactDom.render(
//   <Index />,
//   document.getElementById("root")
// )
