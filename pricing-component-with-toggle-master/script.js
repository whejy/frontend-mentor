let pricePlans = [];

function Plan(type, monthlyCost, annualCost, storage, users, send) {
  this.type = type;
  this.monthlyCost = `$${monthlyCost}`;
  this.annualCost = `$${annualCost}`;
  this.storage = storage;
  this.users = users;
  this.send = `${send} GB`;
}

const createPricePlans = () => {
  return pricePlans.push(
    new Plan('Basic', 19.99, 199.99, '500 GB', 2, 3),
    new Plan('Professional', 24.99, 249.99, '1 TB', 5, 10),
    new Plan('Master', 39.99, 399.99, '2 TB', 10, 20)
  );
};

const generateCardHtml = (plan) => {
  let html = `<div class="col">
    <div class="card" style="width: auto"><div class="card-header">${plan.type} ${plan.monthlyCost}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${plan.storage}</li>
      <li class="list-group-item">${plan.users} Users Allowed</li>
      <li class="list-group-item">Send up to ${plan.send}</li>
    </ul>
    <div class="card-footer">Learn More</div>
  </div></div></div>`;
  return html;
};

addEventListener('DOMContentLoaded', () => {
  createPricePlans();
  let content = '';
  let cards = document.getElementById('cards');

  pricePlans.forEach((plan) => {
    content += generateCardHtml(plan);
  });
  cards.innerHTML = content;
});
