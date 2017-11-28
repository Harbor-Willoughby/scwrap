import React from 'react'
import {
  connect,
} from 'react-redux';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  picture(src, name) {
    return (
        <section className="picture">
            <p className="name">{name}</p>
            <img className="image" src={src} alt={name} />
        </section>
        );
  }
  
  memo(title, text) {
    return (
    <dl className="memo">
        <dt className="title">{title}</dt>
        <dd className="text">{text}</dd>
    </dl>
    );
  }

  render() {
    return (
      <section id="box">
        {
            this.props.data.type == "picture" ? 
                this.picture(this.props.data.src, this.props.data.name) 
                : this.memo(this.props.data.title, this.props.data.text)
        }
      </section>
    );
  }
}