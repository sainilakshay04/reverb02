import React from "react";
const styles = {
	card: {
		margin: '10px',
		display: 'inline-block',
		width: '500px',
		maxHeight: '650px',
		boxShadow: '3px 15px 30px 1px grey',
	},
	cardImg: {
		width: '500px',
		height: '360px'
	},
	artistName: {
		fontWeight: '600'
	},
	recordLabel: {
		fontSize: '12px',
		color: 'grey'
	},
	cardTitle: {
		fontWeight: '700',
		paddingLeft: '5px'
	},
	cardDescription:{
	    paddingLeft: '5px'
	},
	icons: {
		width: '20px',
		height: '20px',
	},
	commentLikes: {
		fontWeight: 'lighter',
		fontSize: '12px',
		color: 'grey',
		display: 'inline-block',
		marginLeft: '4px'
	},
	cardInfoContainer: {
		paddingBottom: '10px',
		paddingLeft: '5px'
	}
}
export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            likes: props.likes,
            comments: props.comments,
            isLiked: false,
            likeIcon: '/img/heart_inactive.png'
        };
    }
	updateLike() {
		const { isLiked, likes, likeIcon } = this.state;
		if (isLiked) {
			this.setState({
				likes: likes - 1,
				isLiked: !isLiked,
				likeIcon: 'img/heart_inactive.png'
			});
		} else {
			this.setState({
				likes: likes + 1,
				isLiked: !isLiked,
				likeIcon: 'img/heart_active.png'
			});
		}
	}
    render(){
        const{
            likes,
            likeIcon
        } = this.state;
        const {
            art,
            title,
            description,
            artistThumb,
            artistName,
            recordLabel,
            comments
        } = this.props;
        return(
        <div>
            <div className="card" style={styles.card}>
                <img alt="Album Art" className="card-img" style={styles.cardImg} src={art}/>
                <div className="card-block">
                    <h4 className="card-title" style={styles.cardTitle}>{title}</h4>
                    <p className="card-text" style={styles.cardDescription}>{description}</p>
                </div>
                <div style={styles.cardInfoContainer}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
								<div className="col-md-3">
									<img alt="Artist Thumbnail" src={artistThumb} className = "img-circle" height="50" width="50" />
								</div>
								<div className="col-md-9">
									<div className="col" id="21" height="50%">
										<div className="artist-name" style={styles.artistName}>{artistName}</div>
									</div>
									<div className="col" id="22" height="50%">
										<div className="record-label" style={styles.recordLabel}>{recordLabel}</div>
									</div>
								</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-5">
								<img alt="Heart Icon" src={likeIcon} className="icons" style={styles.icons} onClick={() => this.updateLike()} />
								<div className="commentLikes" style={styles.commentLikes}>{likes}</div>
							</div>
							<div className="col-md-1 separator">|</div>
							<div className="col-md-5" >
								<img alt="Comment Icon" src="img/comments.png" className="icons" style={styles.icons} />
								<div className="commentLikes" style={styles.commentLikes}>{comments}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
