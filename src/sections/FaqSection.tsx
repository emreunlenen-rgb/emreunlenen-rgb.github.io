import { faqItems } from '../data/faq';
import FaqItem from '../components/FaqItem';

export default function FaqSection() {
  return (
    <section id="sss" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            SSS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Web sitesi kullanımı, videolar ve şenlik hakkında merak ettiğiniz soruların yanıtları.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
