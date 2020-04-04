import React from 'react';
import axios from 'axios';

class FormMovies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          id: '',
          title: '',
          poster: '',
          comment: '',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
            alert(`Film ajouté avec l'ID ${res.id} !`);
        })
        .catch(e => {
            console.error(e);
            alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
        });
    }

    render(){
        return(
            <div className="FormMovies">
                <h1>Saisie d'un film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="title">Titre</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Lien du poster</label>
                            <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Commentaires</label>
                            <textarea
                            type="text"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default FormMovies;