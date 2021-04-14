import React, { Component } from "react";
import ReactDOM from "react-dom";

const panels = [
  {
    label: "Email Marketing Specialist",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: "Student Billing Associate",
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: "Associate Account Executive, Admissions",
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
 
];

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector(".panel__inner").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { label, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };

    return (
      
        <div className="panel" role="tabpanel" aria-expanded={isActive}>
          <button className="panel__label" role="tab" onClick={activateTab}>
            {label}
          </button>
          <div
            className="panel__inner"
            style={innerStyle}
            aria-hidden={!isActive}
          >
            <p className="panel__content">{content}</p>
          </div>
        </div>
      
    );
  }
}

export class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    // const { panels } = this.props
    const { activeTab } = this.state;
    return (
      <div className="accordion" role="tablist">
      <div className='container'>
        {panels.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
        </div>
      </div>
    );
  }
}
