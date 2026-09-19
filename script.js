const GAS_URL = "https://script.google.com/macros/s/AKfycbzi6BX24ENHKGBPOUmFbzyW_woTgFkhGF24Xn-7TjO5OdE9sTVUEFQwKytgVrCxHQXpPA/exec";
// -------------------------
// GASへの回答送信
// -------------------------
function sendDataToGAS(payload) {
  // iframe名が重複しないようにする
  const iframeName =
    "hidden_iframe_" +
    Date.now() +
    "_" +
    Math.random().toString(36).slice(2);

  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const form = document.createElement("form");
  form.method = "POST";
  form.action = GAS_URL;
  form.target = iframeName;
  form.style.display = "none";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "payload";
  input.value = JSON.stringify(payload);

  form.appendChild(input);
  document.body.appendChild(form);

  form.submit();
}


function showDebriefScreen(mergedData) {
  const debrief = document.createElement("div");
  debrief.id = "debrief-screen";
  debrief.style.cssText = `
    position: fixed;
    inset: 0;
    background: #ffffff;
    overflow-y: auto;
    z-index: 9999;
  `;

  debrief.innerHTML = `
    <div style="width:800px; margin:60px auto; text-align:left; font-size:18px; line-height:1.9; padding-bottom:60px;">
      <h2>実験終了後のご説明と、回答データの研究利用に関する同意の再確認</h2>

      <p>本研究にご参加いただき、誠にありがとうございました。</p>
     
      <p>本研究では、YouTube上のニュース動画に表示されるコメントの内容によって、視聴者による報道の受け止め方や、報道に対する評価がどのように変化するかを検討しています。</p>
      
      <h3 style="font-size: 18px;">本研究で使用したニュース動画について</h3>

      <p>本研究で提示したニュース動画は、実在するテレビ局、報道機関、またはYouTubeチャンネルが制作・配信したニュース映像ではありません。研究者が研究用に作成した動画です。</p>

      <p>動画では、実際に社会で議論されている政策上または社会上の問題を題材とし、2026年５月時点で公表されていた情報をもとに、研究者が生成AI（ChatGPT）を用いつつ、事実確認を行いながら動画の原稿を作成しました。その原稿を用いて、生成AIサービス「NoLang」により、ナレーション、画像、字幕等を含むニュース解説形式の動画を生成しました。したがって、動画内の音声や映像表現は生成AIによって作成されたものであり、実在するテレビ局のアナウンサーや記者が実際に報道したものではありません。</p>

      <p>動画の題材となった政策上または社会上の問題や、その説明に用いた基本的な事実関係は、公開されていた情報に基づいています。ただし、動画は研究用の短い刺激として作成されているため、実際の政策上または社会上の問題について、全ての情報や立場を網羅したものではありません。限られた時間で要点を提示するため、情報の選択、要約、表現の簡略化を行っています。また動画内容は、特定の政治的立場への賛同または反対を促すことを目的としたものではありません。</p>
      
      <p>動画の作成後に、政策、制度または社会状況が変化している可能性があります。そのため、提示した動画は、調査実施時点における最新のニュースや政策情報を提供することを目的としたものではありません。</p>
      
      <p>本研究では全部で9本のニュース動画を使用し、参加者の皆様には、そのうち1本を見ていただきました。どの動画が提示されるかは調査システム上でランダムに決定されており、参加者の政治的信条、回答内容、属性等に応じて選ばれたものではありません。</p>

      <h3 style="font-size: 18px;">本研究で使用したコメントについて</h3>

      <p>動画とともに表示されたコメントは、すべて研究者が本研究のために作成した架空のコメントです。実在するYouTube利用者が投稿したものではなく、実際の動画に対して寄せられた反応でもありません。投稿者名、アイコン、投稿時刻、「高評価」の数などが表示されていた場合、それらも研究用に作成または設定されたものです。</p>

      <p>本研究では、参加者によって、次のいずれかのコメント条件がランダムに提示されました。</p>

      <p>1.	報道の中立性や公正性を批判するコメント</p>

      <p>2.	報道に必要な情報、背景または文脈の不足を批判するコメント</p>

      <p>3.	報道内容ではなく、動画の見せ方や視聴しやすさを批判するコメント</p>

      <p>4.	報道のあり方とは関係のないコメント</p>

      <p>5.	コメントが表示されない条件</p>

      <p>コメントの内容は、異なる種類のコメントが報道評価に与える影響を比較するために、研究者が意図的に設定したものです。一方、参加者がどのコメント条件に割り当てられるかはランダムに決定されており、参加者の回答や属性に基づいて決定されたものではありません。</p>

      <h3 style="font-size: 18px;">事前に詳しい説明を行わなかった理由</h3>

      <p>実験開始前に、コメントが研究者によって作成されたものであることや、比較するコメントの種類、研究の具体的な仮説を詳しくお伝えすると、そのことを意識して回答することにより、研究結果に影響が生じる可能性がありました。そのため、事前の説明では、研究目的および刺激の作成方法の一部をお伝えしていませんでした。</p>

      <p>この画面では、事前にお伝えしていなかった内容を含めて、本研究の目的と方法をご説明しています。</p>

      <p>皆様からご提供いただいた回答は、コメントが報道評価に及ぼす影響を明らかにするための学術研究にのみ使用します。研究結果を公表する際には、統計的に集計した形で報告し、個人が特定される形で公表することはありません。</p>

      <p>本研究についてご不明な点やご質問がある場合は、クラウドワークスのメッセージ機能を通じて研究代表者までお問い合わせください。</p>

      <p>以上の説明を踏まえ、今回ご回答いただいたデータを本研究に利用することについて、あらためて同意を確認させていただきます。</p>

      <p>同意いただける場合は、「同意して回答を送信する」を押してください。</p>

      <p>同意いただけない場合は、「同意しない」を押してください。「同意しない」を選択した場合、回答は研究者に送信されません。<span style="color: red; text-decoration: underline;">ただし、同意しない場合は確認コードが表示されず、謝礼をお受け取りになることができません。 </span></p>

      <div
        id="debrief-choice-area"
        style="
          margin-top:42px;
          padding-top:30px;
          border-top:1px solid #cccccc;
          text-align:center;
        "
      >
        <p style="font-weight:bold; font-size:19px;">
          回答データの研究利用について、いずれかを選択してください。
        </p>

        <div
          style="
            display:flex;
            justify-content:center;
            align-items:center;
            gap:24px;
            flex-wrap:wrap;
            margin-top:28px;
        "
        >
         <button
           id="debrief-consent-button"
           type="button"
           style="
             padding:14px 28px;
             font-size:17px;
             font-weight:bold;
             color:#ffffff;
             background:#1769aa;
             border:1px solid #1769aa;
             border-radius:5px;
             cursor:pointer;
        "
      >
        同意して回答を送信する
      </button>

      <button
        id="debrief-decline-button"
        type="button"
        style="
          padding:14px 28px;
          font-size:17px;
          background:#ffffff;
          border:1px solid #777777;
          border-radius:5px;
          cursor:pointer;
        "
      >
        同意しない
      </button>
    </div>

    <p
      id="debrief-status-message"
      role="status"
      aria-live="polite"
      style="
        min-height:32px;
        margin-top:20px;
        font-weight:bold;
      "
     ></p>
   </div>
  `;

  document.body.appendChild(debrief);
  const consentButton = debrief.querySelector(
    "#debrief-consent-button"
  );

  const declineButton = debrief.querySelector(
    "#debrief-decline-button"
  );

  const statusMessage = debrief.querySelector(
    "#debrief-status-message"
  );

  // 選択後の終了画面を表示する
  function showDebriefCompletionScreen(title, message) {
    debrief.innerHTML = `
      <div
        style="
          width:800px;
          max-width:calc(100% - 40px);
          margin:60px auto;
          text-align:left;
          font-size:18px;
          line-height:1.9;
          padding-bottom:60px;
        "
      >
        <h2>${title}</h2>

        <p>${message}</p>

        <p
          style="
            margin-top:36px;
            text-align:center;
            font-weight:bold;
          "
        >
          ここで実験は終了です。ブラウザを閉じてください。
        </p>
      </div>
    `;

    debrief.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // -------------------------
  // 「同意して回答を送信する」
  // -------------------------
  consentButton.addEventListener("click", function() {
    // 二重送信を防ぐ
    consentButton.disabled = true;
    declineButton.disabled = true;

    consentButton.style.cursor = "default";
    declineButton.style.cursor = "default";

    statusMessage.style.color = "#333333";
    statusMessage.textContent = "回答を送信しています。";

    // 元のデータを直接変更せず、送信用データを作る
    const consentedData = {
      ...mergedData,

      // デブリーフィング後の同意を記録
      debrief_consent: 1,
      debrief_consent_at: new Date().toISOString()
    };

    try {
      sendDataToGAS(consentedData);

      console.log("Consented participant data submitted:");
      console.log(consentedData);

      showDebriefCompletionScreen(
        "回答を送信しました",
        "回答データの研究利用にご同意いただき、ありがとうございました。" +
        '<br><br><span style="font-size:28px; font-weight:bold;">確認コードは「9898」です。</span>'
      );
    } catch (error) {
      console.error("Data submission error:", error);

      // 送信できなかった場合は、もう一度押せるように戻す
      consentButton.disabled = false;
      declineButton.disabled = false;

      consentButton.style.cursor = "pointer";
      declineButton.style.cursor = "pointer";

      statusMessage.style.color = "#b00020";
      statusMessage.textContent =
        "回答を送信できませんでした。通信環境をご確認のうえ、もう一度ボタンを押してください。";
    }
  });

  // -------------------------
  // 「同意しない」
  // -------------------------
  declineButton.addEventListener("click", function() {
    // 二重操作を防ぐ
    consentButton.disabled = true;
    declineButton.disabled = true;

    // jsPsychが保持している回答をブラウザ上のメモリから削除する
    if (
      jsPsych.data &&
      typeof jsPsych.data.reset === "function"
    ) {
      jsPsych.data.reset();
    }

    // デブリーフィング画面に渡された統合データも空にする
    Object.keys(mergedData).forEach(function(key) {
      delete mergedData[key];
    });

    // GASへの送信処理は実行しない
    showDebriefCompletionScreen(
      "「同意しない」が選択されました",
      "今回の回答は送信されず、研究データとして使用されません。"
    );
  });
}

const jsPsych = initJsPsych({
  on_finish: function() {
    const allTrials = jsPsych.data.get().values();
    let mergedData = {};
    let stimulusRt = null;

    allTrials.forEach(trial => {
      if (trial.response && typeof trial.response === "object") {
        Object.assign(mergedData, trial.response);
      }

      // 動画ページ trial の rt を拾う
      if (trial.trial_name === "video_stimulus") {
        stimulusRt = trial.rt;
        mergedData.video_started = trial.video_started ?? "";
        mergedData.video_completed = trial.video_completed ?? "";
        mergedData.video_watch_time_sec =
          trial.video_watch_time_ms !== null &&
          trial.video_watch_time_ms !== undefined &&
          trial.video_watch_time_ms !== ""
            ? Number((trial.video_watch_time_ms / 1000).toFixed(3))
            : "";
      }
    });

    // ランダム割付情報を保存
    mergedData.comment_condition = commentCondition;
    mergedData.video_condition = selectedVideo.video_condition;
    mergedData.video_id = selectedVideo.video_id;
    mergedData.video_src = selectedVideo.video_src;

    // 動画ページ滞在時間（秒、小数3桁）
    mergedData.video_page_time_sec =
      (stimulusRt !== null && stimulusRt !== undefined)
        ? Number((stimulusRt / 1000).toFixed(3))
        : "";

    mergedData.total_time_sec = Math.round(jsPsych.getTotalTime() / 1000);

    // コメント欄操作チェックを数値化
    if (mergedData.comment_check === "コメント欄は報道が中立でないと批判していた") {
      mergedData.comment_check = 1;
    } else if (mergedData.comment_check === "コメント欄は報道が情報不足だと批判していた") {
      mergedData.comment_check = 2;
    } else if (mergedData.comment_check === "コメント欄は報道内容と関係がなかった") {
      mergedData.comment_check = 3;
    } else if (mergedData.comment_check === "コメント欄は報道内容そのものではなく、動画の見せ方や視聴しやすさを批判していた") {
      mergedData.comment_check = 4;  
    } else if (mergedData.comment_check === "コメント欄にコメントはなかった") {
      mergedData.comment_check = 5; 
    } else if (mergedData.comment_check === "コメント欄のコメントの内容をよく覚えていない") {
      mergedData.comment_check = 6;
    }

    // YouTubeニュース頻度を数値化
    if (mergedData.youtube_news_freq === "1日に複数回") {
      mergedData.youtube_news_freq = 1;
    } else if (mergedData.youtube_news_freq === "1日に1回程度") {
      mergedData.youtube_news_freq = 2;
    } else if (mergedData.youtube_news_freq === "週に2〜3回程度") {
      mergedData.youtube_news_freq = 3;
    } else if (mergedData.youtube_news_freq === "週に1回程度") {
      mergedData.youtube_news_freq = 4;
    } else if (mergedData.youtube_news_freq === "月に数回程度") {
      mergedData.youtube_news_freq = 5;
    } else if (mergedData.youtube_news_freq === "月に1回程度") {
      mergedData.youtube_news_freq = 6;
    } else if (mergedData.youtube_news_freq === "年に数回程度") {
      mergedData.youtube_news_freq = 7;
    } else if (mergedData.youtube_news_freq === "年に1回程度") {
      mergedData.youtube_news_freq = 8;
    } else if (mergedData.youtube_news_freq === "全く見ない") {
      mergedData.youtube_news_freq = 9;
    }

    // 0始まり → 1始まり補正
    const likertKeys = [
      "ideo_9jo",
      "ideo_welfare",
      "ideo_name",
      "ideo_environment",
      "ideo_nuclear",
      "ideo_work",
      "ideo_aikoku",
      "ideo_immigrant",
      "ideo_marriage",
      "tv_news_trust",
      "jn_neutral",
      "jn_balance",
      "jn_no_personal_opinion",
      "jn_context_process",
      "jn_why_important",
      "jn_issue_clarity",
      "credibility",
      "legitimacy",
      "role",
      "refer",
      "bias",
      "fairness",
      "judge",
      "background",
      "legi_1",
      "legi_2",
      "trap",
      "legi_3",
      "legi_4"
    ];

    likertKeys.forEach(key => {
      if (mergedData[key] !== undefined && mergedData[key] !== null && mergedData[key] !== "") {
        mergedData[key] = Number(mergedData[key]) + 1;
      }
    });

    // この時点では送信せず、デブリーフィング画面を表示する
    showDebriefScreen(mergedData);
  }
});

// -------------------------
// 普通のランダム化
// -------------------------
const commentConditions = ['A', 'B', 'C', 'D', 'E'];
const commentCondition = jsPsych.randomization.sampleWithoutReplacement(commentConditions, 1)[0];

const videoConditions = [
  {
    video_condition: 1,
    video_id: "gaikokuijin",
    video_src: "videos/gaikokuijin.mp4",
    video_title: "【解説】外国人政策について"
  },
  {
    video_condition: 2,
    video_id: "hatarakikata",
    video_src: "videos/hatarakikata.mp4",
    video_title: "【解説】働き方改革について"
  },
  {
    video_condition: 3,
    video_id: "intelligence",
    video_src: "videos/intelligence.mp4",
    video_title: "【解説】インテリジェンス政策について"
  },
  {
    video_condition: 4,
    video_id: "kenpou",
    video_src: "videos/kenpou.mp4",
    video_title: "【解説】憲法改正について"
  },
  {
    video_condition: 5,
    video_id: "kokki",
    video_src: "videos/kokki.mp4",
    video_title: "【解説】国旗損壊罪について"
  },
  {
    video_condition: 6,
    video_id: "kyuhu",
    video_src: "videos/kyuhu.mp4",
    video_title: "【解説】給付付き税額控除について"
  },
  {
    video_condition: 7,
    video_id: "nichibei",
    video_src: "videos/nichibei.mp4",
    video_title: "【解説】日米首脳会談について"
  },
  {
    video_condition: 8,
    video_id: "taxcut",
    video_src: "videos/taxcut.mp4",
    video_title: "【解説】消費税の減税について"
  },
  {
    video_condition: 9,
    video_id: "weapon",
    video_src: "videos/weapon.mp4",
    video_title: "【解説】武器輸出の解禁について"
  },
];

const selectedVideo =
  jsPsych.randomization.sampleWithoutReplacement(
    videoConditions,
    1
  )[0];

jsPsych.data.addProperties({
  comment_condition: commentCondition,
  video_condition: selectedVideo.video_condition,
  video_id: selectedVideo.video_id,
  video_src: selectedVideo.video_src
});

const timeline = [];

// -------------------------
// 同意画面
// -------------------------
const consent = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <h2>研究参加への同意</h2>
    <p>この研究では、ニュース動画を見て感想を回答していただきます。</p>
    <p>参加は任意であり、いつでも中止できます。</p>
    <p>「仕事の詳細」をお読みいただいて同意いただける場合は、下のボタンを押してください。</p>
  `,
  choices: ['同意して進む']
};
timeline.push(consent);

// -------------------------
// 属性アンケート
// -------------------------
const demographics = {
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>
      年齢：
      <input name="age" type="number" min="18" max="100" required>
    </p>

    <p>
      性別：
      <select name="gender" required>
        <option value="">選択してください</option>
        <option value="1">男性</option>
        <option value="2">女性</option>
        <option value="3">その他</option>
        <option value="4">回答しない</option>
      </select>
    </p>
  `,
  button_label: '次へ'
};
timeline.push(demographics);

// -------------------------
// YouTubeニュース頻度
// -------------------------
const youtubeNewsFreqSurvey = {
  type: jsPsychSurveyMultiChoice,
  preamble: `
    <div style="width:800px; margin:0 auto; text-align:left;">
      <h3>YouTubeでのニュース視聴について</h3>
      <p>以下の質問について、最もあてはまるものを1つ選んでください。</p>
    </div>
  `,
  questions: [
    {
      prompt: "あなたは、YouTubeでテレビ局や新聞社のニュース報道をどれくらいの頻度で見ますか？",
      name: "youtube_news_freq",
      options: [
        "1日に複数回",
        "1日に1回程度",
        "週に2〜3回程度",
        "週に1回程度",
        "月に数回程度",
        "月に1回程度",
        "年に数回程度",
        "年に1回程度",
        "全く見ない"
      ],
      required: true
    }
  ],
  button_label: "次へ"
};
timeline.push(youtubeNewsFreqSurvey);

// -------------------------
// イデオロギー
// -------------------------
const ideologyLabels = [
  "賛成である",
  "やや賛成である",
  "どちらかといえば賛成である",
  "どちらともいえない",
  "どちらかといえば反対である",
  "やや反対である",
  "反対である"
];

const ideologySurvey = {
  type: jsPsychSurveyLikert,
  preamble: `
    <div style="width:1100px; margin:0 auto; text-align:left;">
      <h3>政治的な考え方について</h3>
      <p>以下の各項目について、あなたの考えに最も近いものを選んでください。</p>
    </div>
  `,
  questions: [
    { prompt: "憲法9条を改正する", labels: ideologyLabels, required: true, name: "ideo_9jo" },
    { prompt: "社会保障支出をもっと増やす", labels: ideologyLabels, required: true, name: "ideo_welfare" },
    { prompt: "夫婦別姓を選べるようにする", labels: ideologyLabels, required: true, name: "ideo_name" },
    { prompt: "経済成長と環境保護では環境保護を優先したい", labels: ideologyLabels, required: true, name: "ideo_environment" },
    { prompt: "原発は直ちに廃止する", labels: ideologyLabels, required: true, name: "ideo_nuclear" },
    { prompt: "政府が職と収入をある程度保障する", labels: ideologyLabels, required: true, name: "ideo_work" },
    { prompt: "学校で子供に愛国心を教える", labels: ideologyLabels, required: true, name: "ideo_aikoku" },
    { prompt: "外国人移住者が増えることは日本にとってよくないことである", labels: ideologyLabels, required: true, name: "ideo_immigrant" },
    { prompt: "同性同士の結婚を認める", labels: ideologyLabels, required: true, name: "ideo_marriage" }
  ],
  scale_width: 900,
  button_label: "次へ"
};
timeline.push(ideologySurvey);

// -------------------------
// テレビ信頼
// -------------------------
const mediaTrustLabels = [
  "信頼している",
  "概ね信頼している",
  "どちらかといえば信頼している",
  "どちらともいえない",
  "どちらかといえば信頼していない",
  "あまり信頼していない",
  "信頼していない"
];

const mediaTrustSurvey = {
  type: jsPsychSurveyLikert,
  preamble: `
    <div style="width:1000px; margin:0 auto; text-align:left;">
      <h3>テレビ報道に対する一般的な考え方について</h3>
      <p>以下の質問について、あなたの考えに最も近いものを選んでください。</p>
    </div>
  `,
  questions: [
    {
      prompt: "あなたは、テレビ報道を一般的にはどれくらい信頼していますか？",
      labels: mediaTrustLabels,
      required: true,
      name: "tv_news_trust"
    }
  ],
  scale_width: 900,
  button_label: "次へ"
};
timeline.push(mediaTrustSurvey);

// -------------------------
// コメントHTML生成
// -------------------------
function makeCommentHTML(username, text, likes, avatarColor) {
  return `
    <div style="display:flex; align-items:flex-start; gap:12px; margin-bottom:20px;">
      <div style="
        width:40px;
        height:40px;
        border-radius:50%;
        background:${avatarColor};
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:bold;
        font-size:16px;
        flex-shrink:0;
      ">
        ${username.charAt(0)}
      </div>

      <div style="text-align:left; max-width:700px;">
        <div style="font-size:14px; margin-bottom:4px;">
          <strong>${username}</strong>
          <span style="color:#606060; margin-left:8px;">1日前</span>
        </div>

        <div style="font-size:15px; line-height:1.5; margin-bottom:8px;">
          ${text}
        </div>

        <div style="font-size:13px; color:#606060;">
          👍 ${likes}
          <span style="margin-left:16px;">返信</span>
        </div>
      </div>
    </div>
  `;
}

// -------------------------
// コメント条件
// -------------------------
let commentBlock = '';

if (commentCondition === 'A') {
  // 中立性違反批判
  commentBlock = `
    ${makeCommentHTML("@media_watcher", "特定の見方だけを強く押し出していて、別の見方がほとんど伝わってこない", 31, "#cc0000")}
    ${makeCommentHTML("@けん", "取り上げ方が最初から片側に寄っていて、異なる立場からの見え方がかなり抜け落ちている", 24, "#0066cc")}
    ${makeCommentHTML("@ABC","論点の扱い方が一方向に寄っていて、逆の見方があまり拾われていない", 18, "#663399")}
    ${makeCommentHTML("@tada","説明の流れが一つの見方に沿いすぎていて、別の受け止め方が入りにくい", 9, "#666666")}
  `;
} else if (commentCondition === 'B') {
  // 情報不足批判
  commentBlock = `
    ${makeCommentHTML("@media_watcher", "結果だけはつかめるけれど、その前に何が積み重なったのかが十分には見えてこない", 31, "#cc0000")}
    ${makeCommentHTML("@けん","何が起きたかは分かるけれど、そこに至る事情や経緯がほとんど見えない", 24, "#0066cc")}
    ${makeCommentHTML("@ABC","話の流れは追えるけれど、前提になる情報が少なくて全体像がつかみにくい", 18, "#663399")}
    ${makeCommentHTML("@tada","出来事だけが先に出ていて、周辺で何があったのかがかなり分かりにくい", 9, "#666666")}
  `;
} else if (commentCondition === 'C') {
  // 無関連コメント
  commentBlock = `
    ${makeCommentHTML("@media_watcher", "通知で流れてきたので開いた。関連に同じ話題の動画がいくつか並んでいた", 31, "#cc0000")}
    ${makeCommentHTML("@けん","タイトルで話題は分かるので、先にほかの動画も見てから本編を確認する", 24, "#0066cc")}
    ${makeCommentHTML("@ABC","最近このチャンネルのサムネイルの雰囲気が少し変わった気がしている", 18, "#663399")}
    ${makeCommentHTML("@tada","おすすめに続けて出てきたので見に来た。あとで別の動画とも見比べる", 9, "#666666")}
  `;
} else if (commentCondition === 'D') {
  // 非ジャーナリズム的だが否定的
  commentBlock = `
    ${makeCommentHTML("@media_watcher", "画面の文字がやや多めに出るので、見続けていると少し目が疲れやすかった", 31, "#cc0000")}
    ${makeCommentHTML("@けん","画面内の情報が少し詰め込み気味で、見ているとややせわしなく感じた", 24, "#0066cc")}
    ${makeCommentHTML("@ABC","画面の切り替えが少し細かすぎて、見ているあいだに落ち着かなさを感じた", 18, "#663399")}
    ${makeCommentHTML("@tada","テロップの出方がやや慌ただしくて、見続けていると少し疲れやすく感じた", 9, "#666666")}
  `;
} else if (commentCondition === 'E') {
  // コメントなし
  commentBlock = `
  `;
}

// -------------------------
// 刺激画面
// -------------------------
let videoStarted = false;
let videoCompleted = false;
let videoStartTime = null;
let videoEndTime = null;

const stimulus = {
  type: jsPsychHtmlButtonResponse,
  data: {
    trial_name: "video_stimulus",
    video_condition: selectedVideo.video_condition,
    video_id: selectedVideo.video_id,
    video_src: selectedVideo.video_src,
    video_title: selectedVideo.video_title,
    comment_condition: commentCondition
  },
  stimulus: `
    <div style="width:900px; margin:0 auto; text-align:center;">
      <h2>以下のニュース報道動画を最後まで視聴してください。</h2>
      <p>
        次ページ以降では、動画の技術的な出来栄えや制作手法そのものではなく、この動画がニュース報道として<br>
        どのように見えるか、また伝え方をどのように受け取るかについてお尋ねします。
      </p>
      <p style="text-decoration: underline;">
        動画を最後まで視聴し、画面上に表示されている情報にも目を通してください。
      </p>
      <div
        style="
          width:800px;
          max-width:calc(100% - 40px);
          margin:20px auto 24px auto;
          padding:16px 20px;
          box-sizing:border-box;
          background:#fff3cd;
          border:2px solid #f0ad4e;
          border-radius:8px;
          color:#7a4b00;
          font-size:17px;
          font-weight:bold;
          line-height:1.8;
          text-align:left;
        "
      >
        <div style="font-size:18px; margin-bottom:6px;">
          視聴前にご確認ください
        </div>
        <div>
          この動画は、2026年５月時点で公表されていた情報を元に作成したものですので、古く感じられるかもしれませんが、その点は気にしないでください。
        </div>
      </div>
      
      <div style="margin-bottom:12px;">
        <video
          id="news-video"
          width="640"
          height="360"
          preload="auto"
          playsinline
          style="background:#000; border:1px solid #ddd;"
        >
          <source src="${selectedVideo.video_src}" type="video/mp4">
          お使いのブラウザでは動画を再生できません。
        </video>
      </div>

      <div style="margin-bottom:16px;">
        <button
          id="play-video-btn"
          type="button"
          style="
            font-size:16px;
            padding:10px 24px;
            border:1px solid #ccc;
            border-radius:4px;
            background:#f8f8f8;
            cursor:pointer;
          "
        >
          動画を再生
        </button>
      </div>

      <div id="video-status" style="font-size:14px; color:#606060; margin-bottom:16px;">
        動画を最後まで視聴すると「次へ」が押せます。
      </div>

      <div style="width:800px; margin:0 auto; text-align:left; font-size:20px; font-weight:bold; margin-bottom:8px;">
        ${selectedVideo.video_title}
      </div>

      <div style="width:800px; margin:0 auto; text-align:left; color:#606060; font-size:14px; margin-bottom:24px;">
        12,345 回視聴
      </div>

      <div style="margin-top:30px; text-align:left; width:800px; margin-left:auto; margin-right:auto;">
        ${
          commentCondition === 'E'
            ? `
              <div style="font-size:18px; font-weight:bold; margin-bottom:20px;">0件のコメント</div>
            `
            : `
              <div style="font-size:18px; font-weight:bold; margin-bottom:20px;">4件のコメント</div>
              ${commentBlock}
            `
        }
      </div>
    </div>
  `,
  choices: ['次へ'],

  on_load: function() {
    const video = document.getElementById('news-video');
    const playButton = document.getElementById('play-video-btn');
    const status = document.getElementById('video-status');

    const nextButton =
      document.querySelector('#jspsych-html-button-response-button-0') ||
      document.querySelector('.jspsych-btn');

    if (nextButton) {
      nextButton.disabled = true;
      nextButton.textContent = '動画終了後に次へ';
    }

    playButton.addEventListener('click', async function() {
      try {
        videoStarted = true;
        videoStartTime = performance.now();

        await video.play();

        playButton.disabled = true;
        playButton.textContent = '再生中';
        playButton.style.cursor = 'default';
        status.textContent = '動画を視聴中です。最後まで視聴してください。';
      } catch (error) {
        status.textContent = '動画を再生できませんでした。動画ファイルの配置やブラウザ設定を確認してください。';
        console.error('Video playback error:', error);
      }
    });

    video.addEventListener('ended', function() {
      videoCompleted = true;
      videoEndTime = performance.now();

      if (nextButton) {
        nextButton.disabled = false;
        nextButton.textContent = '次へ';
      }

      status.textContent = '動画の視聴が完了しました。「次へ」を押してください。';
    });

    video.addEventListener('error', function() {
      status.textContent = '動画の読み込みに失敗しました。videos/nolang_taxcut.mp4 の配置を確認してください。';
    });
  },

  on_finish: function(data) {
    data.video_started = videoStarted;
    data.video_completed = videoCompleted;
    data.video_start_time_ms = videoStartTime;
    data.video_end_time_ms = videoEndTime;
    data.video_watch_time_ms =
      videoStartTime !== null && videoEndTime !== null
        ? videoEndTime - videoStartTime
        : null;
  }
};

timeline.push(stimulus);

const likertLabels = [
  "そう思う",
  "ややそう思う",
  "どちらかといえばそう思う",
  "どちらともいえない",
  "どちらかといえばそう思わない",
  "あまりそう思わない",
  "そう思わない"
];

// 1ページ目：媒介項目
const postSurvey_mediation = {
  type: jsPsychSurveyLikert,
  preamble: `
    <div style="width:800px; margin:0 auto; text-align:left;">
      <h3>ニュース報道動画についての質問</h3>
      <p>先ほどのニュース報道動画に関して、以下の項目についてあなたの考えに最も近いものを選んでください。</p>
      <p style="text-decoration: underline;">動画の技術的な出来栄えや制作手法そのものではなく、この動画がニュース報道としてどのように見えるか、また伝え方をどのように受け取るかについてお答えください。</p>
    </div>
  `,
  questions: [
    {
      prompt: "この報道は偏っていると思う",
      labels: likertLabels,
      required: true,
      name: "bias"
    },
    {
      prompt: "この報道は公正さを欠いていると思う",
      labels: likertLabels,
      required: true,
      name: "fairness"
    },
    {
      prompt: "この報道は判断に必要な情報を十分に伝えていたと思う",
      labels: likertLabels,
      required: true,
      name: "judge"
    },
    {
      prompt: "この報道は必要な背景や文脈を十分に示していたと思う",
      labels: likertLabels,
      required: true,
      name: "background"
    }
  ],
  scale_width: 700,
  button_label: "次へ",
  data: {
    survey_part: "post_mediation"
  }
};

// 2ページ目：正当性項目
const postSurvey_legitimacy = {
  type: jsPsychSurveyLikert,
  preamble: `
    <div style="width:800px; margin:0 auto; text-align:left;">
      <h3>ニュース報道動画についての質問（続き）</h3>
      <p>続いて、以下の項目についてあなたの考えに最も近いものを選んでください。</p>
      <p style="text-decoration: underline;">動画の技術的な出来栄えや制作手法そのものではなく、この動画がニュース報道としてどのように見えるか、また伝え方をどのように受け取るかについてお答えください。</p>
    </div>
  `,
  questions: [
    {
      prompt: "この報道は、ニュース報道として適切だと思う",
      labels: likertLabels,
      required: true,
      name: "legi_1"
    },
    {
      prompt: "この報道は、公共的な問題を伝える報道としてふさわしいと思う",
      labels: likertLabels,
      required: true,
      name: "legi_2"
    },
    {
      prompt: "この項目では、「どちらかといえばそう思う」を選択してください",
      labels: likertLabels,
      required: true,
      name: "trap"
    },
    {
      prompt: "この報道は、ジャーナリズムが果たすべき役割を果たしていると思う",
      labels: likertLabels,
      required: true,
      name: "legi_3"
    },
    {
      prompt: "この報道は、ジャーナリズムとして認めるに値すると思う",
      labels: likertLabels,
      required: true,
      name: "legi_4"
    }
  ],
  scale_width: 700,
  button_label: "次へ",
  data: {
    survey_part: "post_legitimacy"
  }
};

timeline.push(postSurvey_mediation);
timeline.push(postSurvey_legitimacy);


// -------------------------
// 操作チェック
// -------------------------
const manipulationCheck = {
  type: jsPsychSurveyMultiChoice,
  preamble: `
    <div style="width:800px; margin:0 auto; text-align:left;">
      <h3>コメント欄についての質問</h3>
    </div>
  `,
  questions: [
    {
      prompt: "先ほどの画面に表示された動画のコメント欄について、あなたはどのように思いましたか。<br>コメントの内容をよく覚えていない場合は「コメント欄のコメントの内容をよく覚えていない」を選択してください。",
      name: "comment_check",
      options: [
        "コメント欄は報道が中立でないと批判していた",
        "コメント欄は報道が情報不足だと批判していた",
        "コメント欄は報道内容と関係がなかった",
        "コメント欄は報道内容そのものではなく、動画の見せ方や視聴しやすさを批判していた",
        "コメント欄にコメントはなかった",
        "コメント欄のコメントの内容をよく覚えていない"
      ],
      required: true
    }
  ],
  button_label: "次へ"
};
timeline.push(manipulationCheck);

// -------------------------
// ユーザーID（アンケートの最後に表示）
// -------------------------
const userIdSurvey = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div style="width:800px; max-width:calc(100% - 40px); margin:0 auto; text-align:left;">
      <h3>ユーザーIDについて</h3>
      <p>あなたのユーザーIDを教えてください。間違えると仕事を承認できませんので注意してください。</p>
    </div>
  `,
  html: `
    <div style="width:800px; max-width:calc(100% - 40px); margin:0 auto; text-align:left;">
      <p>ユーザーIDは、自分のプロフィールページで確認できます。</p>
      <ol style="margin:10px 0 20px 1.4em; padding-left:0.8em; line-height:1.8;">
        <li>右上にある自分の名前をクリックします。</li>
        <li>プルダウンメニューから「自分の公開ページを確認」をクリックします。</li>
        <li>表示された公開ページのアドレスにある数字がユーザーIDです。</li>
      </ol>

      <label for="crowdworks-user-id"><strong>ユーザーID</strong></label>
      <input
        id="crowdworks-user-id"
        name="user_id"
        type="text"
        inputmode="numeric"
        required
        autocomplete="off"
        pattern="[0-9０-９]+"
        title="数字のみ入力してください"
        style="
          display:block;
          width:300px;
          max-width:100%;
          box-sizing:border-box;
          padding:8px;
          margin-top:8px;
          font-size:16px;
        "
      >
      <p style="font-size:14px; color:#606060; margin-top:8px;">数字のみ入力してください。</p>
    </div>
  `,
  button_label: "事後説明へ",
  data: {
    trial_name: "user_id_survey"
  },
  on_finish: function(data) {
    const enteredUserId = String(
      data.response && data.response.user_id
        ? data.response.user_id
        : ""
    ).trim();

    // 全角数字で入力された場合も、保存時は半角数字にそろえる
    const normalizedUserId = enteredUserId.replace(
      /[０-９]/g,
      character => String.fromCharCode(character.charCodeAt(0) - 0xFEE0)
    );

    data.response.user_id = normalizedUserId;
  }
};

timeline.push(userIdSurvey);

// -------------------------
// 実行
// -------------------------
jsPsych.run(timeline);