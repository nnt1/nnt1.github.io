var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);
if (urlq.indexOf("/accounts/check") != -0x1) {
  objc.accounts['default'].account.has_previously_paid_subscription = true;
  objc.accounts["default"].account.processor.a001.has_customer_object = true;
  objc.accounts['default'].account.processor.b001.has_transaction_history = true;
  objc.accounts["default"].features = ["show_existing_user_age_confirmation_modal", "dfw_message_feedback", "model_switcher", "log_intercom_events", "plugins_available", 'log_statsig_events', "data_export_enabled", "data_deletion_enabled", "new_model_switcher_20230512", "browsing_available", 'beta_features', "data_controls_enabled", 'dfw_inline_message_regen_comparison', "model_preview", "infinite_scroll_history"];
  objc.accounts["default"].entitlement = {
    'expires_at': '2999-09-28T13:14:52+00:00',
    'subscription_id': "3e7d7b26-3c0b-401e-b361-123777666cqy",
    'subscription_plan': "chatgptplusplan",
    'has_active_subscription': true
  };
  objc.accounts['default'].last_active_subscription = {
    'subscription_id': "3e7d7b26-3c0b-401e-b361-123777666cqy",
    'will_renew': true,
    'purchase_origin_platform': "chatgpt_mobile_ios"
  };
} else {
  objc = {
    'categories': [{
      'category': "gpt_3.5",
      'subscription_level': 'free',
      'browsing_model': null,
      'code_interpreter_model': null,
      'default_model': "text-davinci-002-render-sha-mobile",
      'human_category_name': "GPT-3.5",
      'plugins_model': null
    }, {
      'category': "gpt_4",
      'subscription_level': "plus",
      'browsing_model': 'gpt-4-browsing',
      'code_interpreter_model': 'gpt-4-code-interpreter',
      'default_model': "gpt-4-mobile",
      'human_category_name': "GPT-4",
      'plugins_model': "gpt-4-plugins"
    }],
    'models': [{
      'tags': ["mobile"],
      'slug': 'text-davinci-002-render-sha-mobile',
      'title': "Default (GPT-3.5) (Mobile)",
      'description': "Our fastest model, great for most everyday tasks.",
      'max_tokens': 0x1fff,
      'qualitative_properties': {
        'speed': [0x5, 0x5],
        'reasoning': [0x3, 0x5],
        'conciseness': [0x2, 0x5]
      }
    }, {
      'tags': ['mobile'],
      'slug': "gpt-4-mobile",
      'title': "GPT-4 (Mobile, V2)",
      'description': "Our most capable model, great for tasks that require creativity and advanced reasoning.",
      'max_tokens': 0xfff,
      'qualitative_properties': {
        'speed': [0x2, 0x5],
        'reasoning': [0x5, 0x5],
        'conciseness': [0x4, 0x5]
      }
    }, {
      'tags': [],
      'slug': "text-davinci-002-render-sha",
      'title': "Default (GPT-3.5)",
      'description': "Our fastest model, great for most everyday tasks.",
      'max_tokens': 0x1fff,
      'qualitative_properties': {
        'speed': [0x5, 0x5],
        'reasoning': [0x3, 0x5],
        'conciseness': [0x2, 0x5]
      }
    }, {
      'tags': [],
      'slug': 'gpt-4',
      'title': "GPT-4",
      'description': "Our most capable model, great for tasks that require creativity and advanced reasoning.",
      'max_tokens': 0xfff,
      'qualitative_properties': {
        'speed': [0x2, 0x5],
        'reasoning': [0x5, 0x5],
        'conciseness': [0x4, 0x5]
      }
    }, {
      'slug': "gpt-4-browsing",
      'qualitative_properties': {},
      'title': "Web Browsing",
      'enabled_tools': ['tools'],
      'max_tokens': 0xfff,
      'description': "An experimental model that knows when and how to browse the internet",
      'tags': ['beta']
    }, {
      'slug': "gpt-4-plugins",
      'qualitative_properties': {},
      'title': "Plugins",
      'enabled_tools': ['tools3'],
      'max_tokens': 0x2003,
      'description': "An experimental model that knows when and how to use plugins",
      'tags': ['beta']
    }]
  };
}
$done({
  'body': JSON.stringify(objc)
});