function analyzeSession(data) {
  let engagementTimeline = [];
  let confusionMoments = [];

  data.forEach(point => {
    let engagement =
      (point.cameraOn * 0.5) +
      (point.chat * 5) -
      (point.silence * 3);

    engagement = Math.max(0, Math.min(100, engagement));

    engagementTimeline.push({
      time: point.time,
      engagement
    });

    if (point.silence > 10 || point.chat === 0) {
      confusionMoments.push({
        time: point.time,
        reason: "High silence or low interaction detected",
        suggestion: "Re-explain concept with an example"
      });
    }
  });

  return {
    engagementTimeline,
    confusionMoments
  };
}

module.exports = analyzeSession;

