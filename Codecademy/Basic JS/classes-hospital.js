// superclass
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  // static method
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}
// subclass Nurse
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = [certifications];
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    return this._certifications.push(newCertification);
  }
};
// subclass Doctor
class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = false;
  }
}
// testing
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
const docDeath = new Doctor('Death', false);
console.log(nurseOlynyk);
console.log(docDeath);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);