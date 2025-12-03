function updateProgress(currentDonation, target = 1_500_000) {
  const progressCircle = document.querySelector('.progress');
  const percentageText = document.querySelector('.percentage');

  const percent = (currentDonation / target) * 100;

  const circleLength = 314;

  const offset = circleLength - (circleLength * Math.min(percent, 100) / 100);
  progressCircle.style.strokeDashoffset = offset;
  percentageText.textContent = `${percent > 1000 ? '+1000' : percent.toFixed(1)}%`;
}
