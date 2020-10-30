const APIUtil = require('./api_util.js');

function FollowToggle(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState");
    debugger
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.render = function() {
    if (this.followState) {
        this.$el.text("Unfollow!");
    } else {
        this.$el.text("Follow!");
    }
}

FollowToggle.prototype.handleClick = function(event) {
    const successCb = () => {
        this.$el.prop("disabled", false);
        this.followState = !this.followState;
        this.render();
    }
    this.$el.prop("disabled", true);
        
    event.preventDefault();
    if (this.followState) {
        APIUtil.unfollowUser(this.userId).then(successCb);
    } else {
        APIUtil.followUser(this.userId).then(successCb);
    }
}

module.exports = FollowToggle;