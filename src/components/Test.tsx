import { ChangeEvent, FC, useState } from 'react';

const list = [
  'Gone further than making out with someone on school property (at lick)',
  'Changed in the middle of the hallway',
  'Taken condoms from lick and used them',
  'Gone to a concert on a school night',
  'Come high/drunk to lick performance event',
  'Smoked in the locker rooms',
  'Been to an  -unction',
  'Cried in front of a teacher',
  'Cried due to Calc H or PCH',
  'Split a cig/joint with someone at a function who you had not spoken to prior',
  'Pulled an all-nighter to finish a project',
  'Gone skinny dipping',
  'reposted an Instagram infographic with incorrect facts',
  'skipped school for a protest',
  'parked at the city without paying (bonus point: got a ticket)',
  'created a lasting lick tradition',
  'Asked someone to prom publicly',
  'climbed on the roof of a lick building',
  'Seen José without a hat or Devin without his beanie',
  'Had a restorative justice circle (with or without counselors)',
  'heard a rumor about you from a party that has absolutely no logical standing',
  'Joined cult sports (xc or wopo)',
  'Been flirted with by Andrew M. Or flirted with Ms.Wilkinson',
  'Sold or bought illegal substances at school',
  'Been a part of a named friend group',
  'Changed friendgroups drastically (not including freshman year)',
  'Gone into debt with lick caf account',
  'taken Bart to/from school with a teacher (bonus points if you had a non-shallow conversation)',
  'Hid alc at school',
  'Gone into lick fac/staff lounge or teachers bathrooms',
  'Participated in multiple overall fridays in a row',
  'Confided in a teacher about being hungover/other illegal activities',
  'Bought up from the corner store on ocean',
  'Bought up during free or tutorial periods',
  'Loudly discussed events of a party during class or planned a function during class',
  'Hosted a 20+ people function',
  'Successfully skipped the entire lunch line straight to the front',
  'Stayed overnight at a lick house party when it’s too far away',
  'Worn a different costume to school for Halloween because yours is too slutty',
  'Had drunk/high photos of you posted on your locker for a birthday or senior night',
  'Gone on lick-organized overnight trip for sport or other activity',
  'Unintentionally worn the same outfit to school as one of your good friends',
  'Gotten less than 50% on a math quiz or test',
  'Founded a club or led a club (extra point if you met less than twice a semester)',
  'Participated in one acts',
  'Experienced Rowan George’s jungle juice',
  'Spoken at a community or class meeting',
  "Added a leaf to the thankful tree outside of counselor's office",
  'Cried in a counselor (college or other) office',
  'Had a teacher tell you that they are concerned for your mental health',
  'Put up a non-lick-approved poster (without stamp)',
  'Ate lunch with a group of teachers/a teacher',
  'Taken a 30+ min nap at school',
  'Had uninvited someone to a function/have been uninvited to a function',
  'Skip school dance/leave early (at least 1 ½ hours early) to attend a post-school-dance function',
  'Skipped a function because you had too much work',
  'Figure out you are gay/bi/etc. after attending Lick-Wilmerding',
  'Be the cause of a breakup of a falling out of any kind',
  'Come to school having done 0 homework for any of your classes that day (having had homework due in all those classes that day)',
  'Be in a love geometric shape (triangle, square, pentagon, etc)',
  'Be at Lick-Wilmerding until midnight',
  'Attend a school dance drunk or high',
  'Been dignosed with mental illness while attending Lick',
  'Successfully snuck in alcohol into a school event (dance, Chase, Kick Wilmerding)',
  'Taken more than required shops classes',
  'Doubled in math or sciences',
  'Taken physics honors and calc honors at same time',
  'Finished through Architecture 3',
  'Taken therapy at school',
  'Told someone you go to Lick-Wilmerding and them not believing you that’s the name of a real school or laughing at you',
  'Had your heart broken by another Lick kid',
  'Attended the lesbacious bash',
  'Done a drug harder than weed/alc at a function',
  'Started a 3+ page paper the night before it was due (and submitted it on time)',
  'Brought someone out of school into school (extra point if they got kicked out)',
  'Attempted to rack/racked from our neighborhood Whole Foods',
  'Been absent more than 20 days in one semester',
  'Taken a class photo or an advisory photo at a party',
  'Done a Fake order with your friend group (extra point if you took your fake photo at school)',
  'Done school-related work or assignments while at a party',
  'Sent school/club emails while at a function or under the influence',
  'Been caught cheating or plagiarizing',
  'Gotten with someone two grades older or two grades younger',
  'Been at the same function as your sibling',
  'Get with someone who looks just like you (siblings or dating moment)',
  'Come school with visible hickeys (Extra point if Mr. McCoullgh calls you out)',
  'Dated two or more people in the same friend group',
  'Hooked up with two or more people in one night',
  'Lost your virginity or won pin tag',
  'Didn’t complete your 40 hours (or PPP requirement one year)',
  'Left a house party to hook up with someone in a park/on the street (Extra point if noe courts)',
  'Walked in on an unexpected hu at a party',
  'Referred to a single (short) kiss as “hooked up”',
  'Been to a Lick-sponsored conference',
  'Fucked another Lick kid',
  'Worn the tiger mascot',
  'Done 3 seasons of sports in one year',
  'Talked about a social issue or homework assignment at a party',
  'Taken alc without paying the host OR paying the host everything’s gone by the time you get there',
  'Graduated',
];

export const Test: FC = () => {
  const [score, setScore] = useState(100);
  const [showScore, setShowScore] = useState(false);

  function updateChecked(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setScore(score - 1);
    } else {
      setScore(score + 1);
    }
  }

  return (
    <div className="mb-8 mx-8">
      {showScore ? (
        <div className="text-center">
          <h2 className="font-bold text-3xl">Your Score:</h2>
          <div className="font-bold text-7xl text-red-500"> {score}</div>
        </div>
      ) : (
        <div>
          <p className="font-bold text-center mb-4">
            Click on every item you have done. Press &quot;Calculate&quot; to
            discover your score.
          </p>
          <ol className="list-decimal">
            {list.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  className="mr-1"
                  onChange={(e) => updateChecked(e)}
                />
                {item}
              </li>
            ))}
          </ol>
          <div className="mt-4 flex justify-center">
            <button
              className="bg-yellow-500 hover:bg-yellow-500/60 transition font-semibold text-lg px-2 py-1 rounded-lg"
              onClick={(_) => setShowScore(true)}
            >
              Calculate Score
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
