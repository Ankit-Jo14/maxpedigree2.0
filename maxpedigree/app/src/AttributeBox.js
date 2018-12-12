import React from 'react';
import './AttributeBox.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedAttributePC,selectedAttributePedigree } from "./pedigreeaction";

class AttributeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { attributes: ["Country", "State", "MG","stemTermination","Flower Color","Hilum Color","Pod Color","pubescenceColor","pubescenceDensity","pubescenceForm","seedcoatColor","seedcoatLuster","None"] };

        // Don't call this.setState() here!
        this.renderswitch = this.renderswitch.bind(this);
        this.calculateDim = this.calculateDim.bind(this);

    }



    renderswitch(){
        const dim = this.calculateDim();
        switch(this.props.tab){
            case "pedigree":
            return(
                
                <div id="attributes" className="container" style={dim}>

                    {this.state.attributes.map((attribute) =>
                       
                        <div key={attribute} className="radio">
                            <label onClick={() => this.props.selectedAttributePedigree(attribute)} ><input type="radio" name="optradio" />{attribute}</label>
                        </div>

                    )}

                </div>
            );
            
            case "pca":
            return(
                
                <div id="attributes" className="container" style={dim}>

                    {this.state.attributes.map((attribute) =>
                       
                        <div key={attribute} className="radio">
                            <label onClick={() => this.props.selectedAttributePC(attribute)} ><input type="radio" name="optradio" />{attribute}</label>
                        </div>

                    )}

                </div>
            );
            
            default:
            return null;
        }

    }

    calculateDim(){
         let dim = this.props.dim;
         return{
             width : dim.width,
             height : dim.height-50
         }
    }

    render() {
       
        return (
            <div className="AttributeBox" >
            <h2> Attributes Selection</h2>
                {this.renderswitch()}
            </div>
        )

    }

}

function mapDispatchToProps(dispatch) {
    // console.log("mapDispatchToProps controlled tabs");
    return bindActionCreators({ selectedAttributePC: selectedAttributePC , selectedAttributePedigree : selectedAttributePedigree  }, dispatch)
};


function mapStateToProps(state) {
 //   console.log("mapstatetoprops infobox");
 //   console.log(state.selectednodePC);
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeBox);