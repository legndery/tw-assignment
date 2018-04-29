class TrackController {
    constructor(model){
        this._model = model;
        this._index =0;
        this.times = [180, 240]
        this.timeSlot = ['morning','afternoon']
    }
    makeNew(time){
        const m = new this._model(time || this.times[this._index], this.timeSlot[this._index]);
        this._index = (this._index+1)%2;
        return m;
    }
    makePair(){
        return [this.makeNew(), this.makeNew()];
    }
}
module.exports = TrackController;