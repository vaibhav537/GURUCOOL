// The class PeerService is defined.
class PeerService {
  constructor() { //In the constructor, a check is made to see if this.peer exists.
    if (!this.peer) {
      // If this.peer does not exist, a new RTCPeerConnection is create
      this.peer = new RTCPeerConnection({
        // The RTCPeerConnection is created with a configuration object that includes a list of ICE servers to use for NAT traversal. 
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      });
    }
  }
  // The async getAnswer(offer) function is defined, which takes an offer as its parameter.
  async getAnswer(offer) {
    // Within getAnswer, the RTCPeerConnection's setRemoteDescription() method is called with the offer.
    if (this.peer) {
      await this.peer.setRemoteDescription(offer);
      // The createAnswer() method is called to generate an answer.
      const ans = await this.peer.createAnswer();
      // The answer is then set as the local description using setLocalDescription().
      await this.peer.setLocalDescription(new RTCSessionDescription(ans));
      // The answer is returned from the function.
      return ans;
    }
  }

  // The async setLocalDescription(ans) function is defined, which takes an ans parameter
  async setLocalDescription(ans) {
    // Within setLocalDescription, the setRemoteDescription() method is called with the ans.
    if (this.peer) {
      await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
    }
  }
  // The async getOffer() function is defined.
  async getOffer() {
    if (this.peer) {
      // Within getOffer, the createOffer() method is called to generate an offer.
      const offer = await this.peer.createOffer();
      // The offer is then set as the local description using setLocalDescription().
      await this.peer.setLocalDescription(new RTCSessionDescription(offer));
      // The offer is returned from the function.
      return offer;
    }
  }
}
// Finally, an instance of PeerService is exported as the default export of the module.
export default new PeerService();