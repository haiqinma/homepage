const NODE_URL = 'https://node.yeying.pub/';
const LANGUAGE_STORAGE_KEY = 'yeying-wallet-language';

const translations = {
  zh: {
    page_title: '夜莺钱包 | 你的密钥，你的身份',
    meta_description: '夜莺钱包：把账户、身份与恢复权交还给你。安全的浏览器钱包和 Web3 身份入口。',
    og_description: '本地控制密钥，加密恢复钱包，以钱包身份进入 Web3。',
    docs_page_title: '夜莺钱包官方文档 | 使用手册',
    docs_meta_description: '夜莺钱包官方使用手册：安全安装、备份恢复、钱包身份登录和 DApp 接入。',
    docs_og_description: '在 wallet.yeying.pub 阅读夜莺钱包官方使用手册。',
    skip_to_content: '跳到主要内容',
    brand_home: '夜莺钱包首页',
    brand_name: '夜莺钱包',
    brand_subtitle: 'YEYING WALLET',
    main_navigation: '主导航',
    nav_security: '安全与恢复',
    nav_identity: '钱包身份',
    nav_developers: '开发者',
    nav_docs: '文档',
    nav_get_wallet: '获取钱包',
    language_current: '中文',
    language_other: 'EN',
    language_switch_aria: '切换到 English',
    hero_eyebrow: '浏览器钱包 · Web3 身份入口',
    hero_title_first: '你的密钥，',
    hero_title_second: '你的身份。',
    hero_lede: '夜莺钱包把账户控制权留在本地，把恢复做成可验证的过程。连接 DApp、管理资产，也用同一个钱包身份进入可信的 Web3 应用。',
    hero_open_node: '进入 Node 应用中心',
    hero_check_wallet: '检测已安装钱包',
    status_checking: '正在检查浏览器中的钱包入口…',
    status_not_installed: '暂未检测到夜莺钱包，请从 Node 应用中心开始安装。',
    status_installed: '已检测到夜莺钱包，可以开始连接 DApp。',
    status_connected: '已连接夜莺钱包：{{address}}',
    status_wallet_connected: '夜莺钱包已连接。',
    status_cancelled: '连接请求被取消。',
    status_error: '连接请求失败：{{message}}',
    wallet_visual_label: '钱包本地安全状态示意',
    visual_keystore: '本地密钥库',
    visual_ready: '就绪',
    wallet_icon_alt: '夜莺钱包图标',
    visual_active_account: '当前账户',
    visual_account_disconnected: '未连接',
    visual_keys_local: '密钥留在设备',
    security_summary: '安全摘要',
    hero_summary_local: '本地密钥控制',
    hero_summary_recovery: 'AES-GCM 加密恢复',
    hero_summary_identity: '可验证身份登录',
    security_eyebrow: '先保护资产，再连接世界',
    security_title_first: '恢复不是一个按钮，',
    security_title_second: '是资产安全的底线。',
    security_intro: '钱包文件和云端托管都只保存加密快照。Node 不接触助记词或私钥，恢复必须在你的设备上完成解密和完整性校验。',
    security_principle_local_title: '密钥留在设备',
    security_principle_local_body: '钱包在浏览器本地生成和使用密钥。网站只能通过明确的 Provider 请求获得授权结果。',
    security_principle_local_link: '阅读密钥安全说明',
    security_principle_recovery_title: '恢复可验证',
    security_principle_recovery_body: '备份文件和云端快照均经过版本、地址、DID 文档和 AES-GCM 完整性检查，失败不会写入部分数据。',
    security_principle_recovery_link: '查看恢复边界',
    security_principle_signing_title: '签名看得懂',
    security_principle_signing_body: '连接、签名和身份资料请求由钱包审批页展示。每次身份登录都绑定 audience、nonce 和有效期。',
    security_principle_signing_link: '查看身份协议',
    identity_eyebrow: '钱包身份',
    identity_title_first: '一个 DID，',
    identity_title_second: '走进更多应用。',
    identity_body: '不把邮箱和用户名交给每一个应用重复注册。你可以在授权范围内出示身份资料，应用后端独立验证签名、scope、nonce 和有效期。',
    identity_link: '了解无插件身份登录',
    identity_sequence_label: '身份登录流程',
    identity_step_one_title: '选择应用',
    identity_step_one_body: '应用提出明确的身份请求',
    identity_step_two_title: '确认范围',
    identity_step_two_body: '钱包展示 scope、网站和用途',
    identity_step_three_title: '验证 Presentation',
    identity_step_three_body: '应用校验 DID 签名与 nonce',
    developers_eyebrow: '开发者入口',
    developers_title_first: '让应用知道',
    developers_title_second: '如何请求，而不是猜。',
    developers_intro: '使用 web3-bs 连接 EIP-1193 钱包，使用钱包身份协议完成可验证身份登录。',
    developers_examples: '查看 DApp 示例',
    developers_manual: '阅读接入手册',
    code_panel_label: 'Provider 调用示例',
    cta_eyebrow: '开始使用夜莺钱包',
    cta_title: '从一个可信入口开始。',
    cta_open_node: '进入 Node 应用中心',
    cta_security: '先了解安全设计',
    footer_tagline: '本地控制密钥，清楚地连接 Web3。',
    footer_official_site: '钱包官方网站 · wallet.yeying.pub',
    footer_docs: '官方文档',
    footer_github: 'GitHub',
    footer_node: 'Node',
    footer_security: '安全联系',
    docs_navigation: '文档导航',
    docs_nav_home: '官网首页',
    docs_eyebrow: '夜莺钱包官方文档',
    docs_title: '夜莺钱包使用手册',
    docs_lede: '在 wallet.yeying.pub 阅读钱包的安全使用指南。这里介绍安装、备份恢复、钱包身份登录和应用接入；源码与完整协议另附官方仓库入口。',
    docs_maintained: '由夜莺钱包团队维护',
    docs_updated: '以当前已发布的钱包版本为准',
    docs_toc_label: '手册目录',
    docs_toc_start: '开始使用',
    docs_toc_wallet: '日常使用',
    docs_toc_security: '安全与密钥',
    docs_toc_recovery: '备份与恢复',
    docs_toc_identity: '钱包身份登录',
    docs_toc_developers: 'DApp 接入',
    docs_toc_help: '故障排查',
    docs_start_title: '安装与创建钱包',
    docs_start_intro: '从夜莺官方入口打开 Node 应用中心，按页面提供的安装方式获取钱包扩展。安装后将扩展固定到浏览器工具栏，再打开钱包创建新账户或导入已有账户。',
    docs_start_step_one: '确认浏览器地址为官方域名 wallet.yeying.pub 或 node.yeying.pub，再从 Node 应用中心进入钱包。',
    docs_start_step_two: '创建钱包时设置本机密码，并按钱包提示完成助记词备份；导入钱包时核对恢复后的账户地址。',
    docs_start_step_three: '首次使用前先确认当前网络、账户地址和安全备份，再进行连接或转账。',
    docs_open_node: '打开 Node 应用中心',
    docs_wallet_title: '账户、网络与转账',
    docs_wallet_account: '从主页面的账户区域切换账户或打开账户管理；复制地址或查看二维码前，先核对当前账户。',
    docs_wallet_network: '收款和转账前确认当前网络。相同格式的 EVM 地址不代表资产属于同一条链。',
    docs_wallet_receive: '收款时向对方提供正确网络下的账户地址，并先用小额转账测试新地址或大额收款。',
    docs_wallet_send: '转账前核对网络、资产、接收地址、金额和手续费。发送 ERC-20 通证也需要对应网络的原生资产支付 gas。',
    docs_wallet_site_access: '可在“网站管理”查看和撤销 DApp 授权；撤销授权不会影响链上资产。',
    docs_security_title: '安全与密钥',
    docs_security_warning_title: '助记词和私钥就是资产控制权',
    docs_security_warning_body: '不要把助记词、私钥或钱包密码发送给任何人，也不要输入到网页、客服表单、聊天工具或云文档。夜莺支持人员不会索取这些信息。',
    docs_security_point_one: '钱包密码用于保护本机钱包数据；忘记密码后，必须使用有效备份和对应密码恢复。',
    docs_security_point_two: '连接网站只会按授权提供账户或身份资料；签名前先检查来源、请求内容和权限范围。',
    docs_security_point_three: '转账前逐项核对网络、接收地址、资产和金额。首次或大额转账建议先做小额测试。',
    docs_recovery_title: '备份与恢复钱包',
    docs_recovery_intro: '账户备份文件和云端密钥托管是不同的恢复入口。普通数据同步不包含私钥，不能代替账户或身份恢复。',
    docs_file_backup_title: '导出加密备份文件',
    docs_file_backup_step_one: '在钱包中打开“账户管理”，选择“导出所有账户”，按提示输入钱包密码。',
    docs_file_backup_step_two: '将导出的加密 JSON 文件保存在自己控制的安全位置。文件仍需密码才能恢复，不要公开分享或上传到不可信服务。',
    docs_file_restore_title: '在新设备恢复',
    docs_file_restore_step_one: '安装夜莺钱包，选择“导入钱包”，切换到“备份文件”，再选择此前导出的 JSON 文件。',
    docs_file_restore_step_two: '输入导出该文件时使用的钱包密码，等待钱包完成解密、格式和完整性校验。',
    docs_file_restore_step_three: '解锁后核对账户地址和 Wallet Identity DID。只有地址和 DID 都符合预期后，再继续使用或签名。',
    docs_partial_restore_note: '如果忘记身份材料仍使用的旧钱包密码，可以选择仅恢复钱包账户；这种情况下原 Wallet Identity 的签名能力不会恢复。请在页面确认恢复结果后再继续。',
    docs_cloud_restore_title: '云端密钥托管恢复',
    docs_cloud_restore_body: '如曾主动开启云端密钥托管，在新设备选择“云端恢复钱包”，使用绑定该身份的通行证完成 Node 授权，再输入创建托管记录时使用的原钱包密码。钱包会在本地解密密文并校验地址与身份。托管端只保存加密快照；Passkey 或 Node 授权本身不等于私钥。',
    docs_restore_note: '恢复完成后，使用原 DID 发起一次钱包身份登录，确认 DApp 收到的身份与恢复前一致。不要把 WebDAV 数据同步当作密钥备份。',
    docs_identity_title: '钱包身份登录',
    docs_identity_intro: '钱包身份让你用同一个 DID 登录支持该协议的应用。每个应用必须单独请求所需资料范围，钱包会在确认页展示应用来源和权限。',
    docs_identity_step_one: '确认发起请求的网站域名和应用名称。',
    docs_identity_step_two: '检查它请求的资料范围，例如基础身份、关联钱包、用户名或邮箱；只批准你愿意提供的范围。',
    docs_identity_step_three: '钱包为当前应用和本次请求生成身份出示证明。应用后端应校验 DID 签名、audience、nonce、scope 和有效期。',
    docs_identity_restore_note: '恢复钱包后首次身份登录若要求解锁，请在钱包中输入本机密码继续。身份 DID 与恢复前不一致时，先停止操作并检查导入结果。',
    docs_developers_title: '开发者：接入 DApp',
    docs_developers_intro: '地址连接可使用 web3-bs 的 EIP-1193 工具；钱包身份登录使用 Wallet Identity 协议。站点应在用户操作后发起请求，并由钱包展示确认界面。',
    docs_developers_check: '后端必须验证签名、应用 audience、一次性 nonce、批准的 scope 和有效期，不能只相信前端返回值。',
    docs_dapp_example: 'DApp 示例源码（GitHub）',
    docs_help_title: '故障排查',
    docs_faq_password_q: '备份文件密码不正确',
    docs_faq_password_a: '请使用导出该文件时的钱包密码。它可能与新设备上当前使用的密码不同。',
    docs_faq_identity_q: '恢复后 DID 与原来不同',
    docs_faq_identity_a: '请停止身份登录，确认选中的是恢复出的身份，并重新检查备份文件和账户地址。',
    docs_faq_provider_q: 'DApp 检测不到钱包',
    docs_faq_provider_a: '确认钱包扩展已安装并解锁，刷新 DApp 页面，再通过官方入口联系支持人员。不要向任何人发送助记词或私钥。',
    docs_contact_title: '官方入口与技术源站',
    docs_contact_body: '钱包官网和用户指南由夜莺官方域名提供。GitHub 用于发布源代码、版本记录和完整技术规范；日常使用请先从本页开始。',
    docs_back_home: '夜莺钱包官方网站',
    docs_node_portal: 'Node 应用中心',
    docs_github_source: 'GitHub 源码与技术档案',
    docs_security_contact: '安全问题联系邮箱',
  },
  en: {
    page_title: 'Yeying Wallet | Your Keys, Your Identity',
    meta_description: 'Yeying Wallet keeps account control local and makes wallet recovery verifiable.',
    og_description: 'Keep keys local, recover with encryption, and enter Web3 with Wallet Identity.',
    docs_page_title: 'Yeying Wallet Official Docs | User Guide',
    docs_meta_description: 'The official Yeying Wallet guide for safe installation, backup and recovery, identity sign-in, and dApp integration.',
    docs_og_description: 'Read the official Yeying Wallet user guide at wallet.yeying.pub.',
    skip_to_content: 'Skip to main content',
    brand_home: 'Yeying Wallet home',
    brand_name: 'Yeying Wallet',
    brand_subtitle: 'YEYING WALLET',
    main_navigation: 'Main navigation',
    nav_security: 'Security & recovery',
    nav_identity: 'Wallet Identity',
    nav_developers: 'Developers',
    nav_docs: 'Docs',
    nav_get_wallet: 'Get the wallet',
    language_current: 'EN',
    language_other: '中文',
    language_switch_aria: 'Switch to Chinese',
    hero_eyebrow: 'Browser wallet · Web3 identity gateway',
    hero_title_first: 'Your keys,',
    hero_title_second: 'Your identity.',
    hero_lede: 'Yeying Wallet keeps account control local and makes recovery verifiable. Connect dApps, manage assets, and enter trusted Web3 apps with the same Wallet Identity.',
    hero_open_node: 'Open Node app center',
    hero_check_wallet: 'Check wallet',
    status_checking: 'Checking for the wallet in this browser…',
    status_not_installed: 'Yeying Wallet was not detected. Start the installation from the Node app center.',
    status_installed: 'Yeying Wallet is installed and ready for a dApp connection.',
    status_connected: 'Yeying Wallet connected: {{address}}',
    status_wallet_connected: 'Yeying Wallet is connected.',
    status_cancelled: 'The connection request was cancelled.',
    status_error: 'Connection request failed: {{message}}',
    wallet_visual_label: 'Local wallet security status',
    visual_keystore: 'LOCAL KEYSTORE',
    visual_ready: 'READY',
    wallet_icon_alt: 'Yeying Wallet icon',
    visual_active_account: 'ACTIVE ACCOUNT',
    visual_account_disconnected: 'Not connected',
    visual_keys_local: 'KEYS STAY ON DEVICE',
    security_summary: 'Security summary',
    hero_summary_local: 'Local key control',
    hero_summary_recovery: 'AES-GCM encrypted recovery',
    hero_summary_identity: 'Verifiable identity sign-in',
    security_eyebrow: 'Protect assets before connecting to the world',
    security_title_first: 'Recovery is not a button,',
    security_title_second: 'it is the baseline for asset safety.',
    security_intro: 'Wallet files and cloud storage hold encrypted snapshots only. Node never touches your seed phrase or private keys; recovery decrypts and verifies integrity on your device.',
    security_principle_local_title: 'Keys stay on your device',
    security_principle_local_body: 'The wallet generates and uses keys locally in your browser. Sites receive only the result of an explicit Provider request.',
    security_principle_local_link: 'Read key security notes',
    security_principle_recovery_title: 'Recovery is verifiable',
    security_principle_recovery_body: 'Backup files and cloud snapshots are checked for version, address, DID document, and AES-GCM integrity before any data is written.',
    security_principle_recovery_link: 'See recovery boundaries',
    security_principle_signing_title: 'Signatures stay clear',
    security_principle_signing_body: 'Connection, signing, and identity requests are shown in the wallet approval view. Every identity login binds an audience, nonce, and expiry.',
    security_principle_signing_link: 'Read the identity protocol',
    identity_eyebrow: 'Wallet Identity',
    identity_title_first: 'One DID,',
    identity_title_second: 'for more apps.',
    identity_body: 'Stop repeating email and username registration with every app. Share identity claims within an approved scope; app backends independently verify the signature, scope, nonce, and expiry.',
    identity_link: 'Explore plugin-free identity sign-in',
    identity_sequence_label: 'Identity sign-in flow',
    identity_step_one_title: 'Choose an app',
    identity_step_one_body: 'The app makes a clear identity request',
    identity_step_two_title: 'Confirm the scope',
    identity_step_two_body: 'The wallet shows the scope, site, and purpose',
    identity_step_three_title: 'Verify the Presentation',
    identity_step_three_body: 'The app checks the DID signature and nonce',
    developers_eyebrow: 'For builders',
    developers_title_first: 'Let apps know',
    developers_title_second: 'what to request.',
    developers_intro: 'Use web3-bs to connect to an EIP-1193 wallet, then use Wallet Identity for verifiable sign-in.',
    developers_examples: 'View the dApp example',
    developers_manual: 'Read the integration guide',
    code_panel_label: 'Provider request example',
    cta_eyebrow: 'Start with Yeying Wallet',
    cta_title: 'Start from a trusted entry point.',
    cta_open_node: 'Open Node app center',
    cta_security: 'Explore the security design',
    footer_tagline: 'Keep keys local. Connect to Web3 with clarity.',
    footer_official_site: 'Official wallet site · wallet.yeying.pub',
    footer_docs: 'Official docs',
    footer_github: 'GitHub',
    footer_node: 'Node',
    footer_security: 'Security contact',
    docs_navigation: 'Documentation navigation',
    docs_nav_home: 'Home',
    docs_eyebrow: 'Official Yeying Wallet documentation',
    docs_title: 'Yeying Wallet user guide',
    docs_lede: 'Read the wallet safety guide on wallet.yeying.pub. It covers installation, backup and recovery, Wallet Identity sign-in, and dApp integration. Source code and full protocol specifications remain available in the official repository.',
    docs_maintained: 'Maintained by the Yeying Wallet team',
    docs_updated: 'Applies to the currently published wallet version',
    docs_toc_label: 'Guide contents',
    docs_toc_start: 'Get started',
    docs_toc_wallet: 'Daily use',
    docs_toc_security: 'Security and keys',
    docs_toc_recovery: 'Backup and recovery',
    docs_toc_identity: 'Wallet Identity sign-in',
    docs_toc_developers: 'dApp integration',
    docs_toc_help: 'Troubleshooting',
    docs_start_title: 'Install and create a wallet',
    docs_start_intro: 'Open the Node app center from an official Yeying entry point and follow its current installation instructions. Pin the extension to your browser toolbar, then create a wallet or import an existing one.',
    docs_start_step_one: 'Check that the address is wallet.yeying.pub or node.yeying.pub before opening the wallet from the Node app center.',
    docs_start_step_two: 'When creating a wallet, set a local password and complete the seed phrase backup. When importing, verify the resulting account address.',
    docs_start_step_three: 'Before connecting or sending funds, confirm the active network, account address, and a secure backup.',
    docs_open_node: 'Open the Node app center',
    docs_wallet_title: 'Accounts, networks, and transfers',
    docs_wallet_account: 'Switch accounts or open Account Management from the account area on the wallet home screen. Check the active account before copying its address or opening its QR code.',
    docs_wallet_network: 'Confirm the active network before receiving or sending funds. EVM addresses can look alike while assets remain on different chains.',
    docs_wallet_receive: 'Give the sender your account address for the correct network. Test new addresses or large transfers with a small amount first.',
    docs_wallet_send: 'Before sending, verify the network, asset, recipient address, amount, and fee. ERC-20 transfers also require the network native asset for gas.',
    docs_wallet_site_access: 'Review and revoke dApp access in Website Management. Revoking access does not affect on-chain assets.',
    docs_security_title: 'Security and keys',
    docs_security_warning_title: 'Your seed phrase and private keys control your assets',
    docs_security_warning_body: 'Never send a seed phrase, private key, or wallet password to anyone. Do not enter them on websites, support forms, chat apps, or cloud documents. Yeying support will never ask for them.',
    docs_security_point_one: 'The wallet password protects wallet data on this device. If you forget it, recovery requires a valid backup and its password.',
    docs_security_point_two: 'Sites receive only the accounts or identity data you approve. Check the origin, request details, and scope before signing.',
    docs_security_point_three: 'Before a transfer, check the network, recipient address, asset, and amount. Test with a small transfer first when appropriate.',
    docs_recovery_title: 'Back up and recover your wallet',
    docs_recovery_intro: 'An encrypted account backup file and cloud key custody are separate recovery options. Ordinary data sync does not contain private keys and cannot recover an account or identity.',
    docs_file_backup_title: 'Export an encrypted backup file',
    docs_file_backup_step_one: 'In the wallet, open Account Management, choose Export All Accounts, and enter your wallet password when prompted.',
    docs_file_backup_step_two: 'Store the encrypted JSON file somewhere you control. It still requires a password to restore; do not share it publicly or upload it to an untrusted service.',
    docs_file_restore_title: 'Restore on a new device',
    docs_file_restore_step_one: 'Install Yeying Wallet, choose Import Wallet, switch to Backup File, and select the JSON file you exported.',
    docs_file_restore_step_two: 'Enter the wallet password used when exporting that file. Wait for decryption, format checks, and integrity verification to finish.',
    docs_file_restore_step_three: 'After unlocking, verify the account address and Wallet Identity DID. Continue only when both match your expectations.',
    docs_partial_restore_note: 'If you do not know the old wallet password still protecting identity material, you can restore wallet accounts only. The original Wallet Identity signing control will not be restored. Review the wallet result before continuing.',
    docs_cloud_restore_title: 'Recover with cloud key custody',
    docs_cloud_restore_body: 'If you previously enabled cloud key custody, choose Cloud Restore Wallet on the new device. Authorize through Node with a Passkey bound to that identity, then enter the original wallet password used when the custody record was created. The wallet decrypts the snapshot locally and verifies its addresses and identity. The service stores ciphertext only; a Passkey or Node authorization is not a private key.',
    docs_restore_note: 'After recovery, sign in to an app once with the original DID and confirm it matches the identity used before recovery. WebDAV data sync is not a key backup.',
    docs_identity_title: 'Sign in with Wallet Identity',
    docs_identity_intro: 'Wallet Identity lets you use the same DID with apps that support the protocol. Each app must request its own data scopes; the wallet shows the app origin and permissions for your approval.',
    docs_identity_step_one: 'Check the domain and name of the app making the request.',
    docs_identity_step_two: 'Review the requested data, such as basic identity, linked wallet, username, or email. Approve only the scopes you want to share.',
    docs_identity_step_three: 'The wallet creates a presentation for this app and request. The app backend should verify the DID signature, audience, nonce, scopes, and expiry.',
    docs_identity_restore_note: 'If the first identity sign-in after recovery asks you to unlock the wallet, enter the local wallet password to continue. Stop and check the import if the DID differs from the one you restored.',
    docs_developers_title: 'For developers: integrate a dApp',
    docs_developers_intro: 'Use web3-bs for EIP-1193 account access and the Wallet Identity protocol for identity sign-in. Start requests after a user action and let the wallet show its approval screen.',
    docs_developers_check: 'The backend must verify the signature, app audience, one-time nonce, approved scopes, and expiry. Do not trust the frontend response alone.',
    docs_dapp_example: 'dApp example source (GitHub)',
    docs_help_title: 'Troubleshooting',
    docs_faq_password_q: 'The backup file password is rejected',
    docs_faq_password_a: 'Use the wallet password that was active when the file was exported. It may differ from the password currently used on the new device.',
    docs_faq_identity_q: 'The restored DID is different',
    docs_faq_identity_a: 'Stop identity sign-in. Confirm the restored identity is selected, then recheck the backup file and account address.',
    docs_faq_provider_q: 'A dApp cannot detect the wallet',
    docs_faq_provider_a: 'Confirm the extension is installed and unlocked, then refresh the dApp. Use an official contact entry for support. Never send a seed phrase or private key.',
    docs_contact_title: 'Official entry points and source',
    docs_contact_body: 'The wallet website and user guide are served from the official Yeying domain. GitHub hosts source code, release history, and full technical specifications. Start here for everyday use.',
    docs_back_home: 'Yeying Wallet official website',
    docs_node_portal: 'Node app center',
    docs_github_source: 'GitHub source and technical archive',
    docs_security_contact: 'Security contact email',
  },
};

let currentLanguage = getInitialLanguage();
let walletStatusState = { kind: 'neutral', key: 'status_checking', values: {} };
let currentAccount = '';
let walletProvider = null;
let providerDiscoveryPromise = null;

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage && translations[storedLanguage]) return storedLanguage;
  } catch {
    // Access to localStorage can be blocked by privacy settings.
  }

  const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  return browserLanguages.some((language) => String(language).toLowerCase().startsWith('en')) ? 'en' : 'zh';
}

function translate(key, values = {}) {
  const template = translations[currentLanguage][key] || translations.en[key] || key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{{${name}}}`, String(value)),
    template,
  );
}

function setLocalizedText(element, value) {
  const fragments = String(value).split('\n');
  element.replaceChildren(
    ...fragments.flatMap((fragment, index) => (
      index === 0
        ? [document.createTextNode(fragment)]
        : [document.createElement('br'), document.createTextNode(fragment)]
    )),
  );
}

function renderWalletStatus() {
  const status = document.querySelector('#wallet-status');
  if (!status) return;
  const className = walletStatusState.kind === 'good'
    ? 'status-good'
    : walletStatusState.kind === 'warn'
      ? 'status-warn'
      : 'status-neutral';
  const dot = document.createElement('span');
  dot.className = `status-dot ${className}`;
  const message = document.createElement('span');
  setLocalizedText(message, translate(walletStatusState.key, walletStatusState.values));
  status.replaceChildren(dot, message);
}

function renderTranslations() {
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  const pageTitleKey = document.querySelector('title')?.dataset.i18n || 'page_title';
  document.title = translate(pageTitleKey);

  const description = document.querySelector('#meta-description');
  description?.setAttribute('content', translate(description.dataset.i18nContent || 'meta_description'));
  const ogTitle = document.querySelector('#og-title');
  ogTitle?.setAttribute('content', translate(ogTitle.dataset.i18nContent || pageTitleKey));
  const ogDescription = document.querySelector('#og-description');
  ogDescription?.setAttribute('content', translate(ogDescription.dataset.i18nContent || 'og_description'));

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    setLocalizedText(element, translate(element.dataset.i18n));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', translate(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', translate(element.dataset.i18nAlt));
  });
  renderCurrentAccount();
  renderWalletStatus();
}

function renderCurrentAccount() {
  const account = document.querySelector('#current-account');
  if (!account) return;
  setLocalizedText(
    account,
    currentAccount ? `${currentAccount.slice(0, 6)}…${currentAccount.slice(-4)}` : translate('visual_account_disconnected'),
  );
  account.title = currentAccount || '';
}

function updateCurrentAccount(accounts) {
  currentAccount = Array.isArray(accounts) && typeof accounts[0] === 'string' ? accounts[0] : '';
  renderCurrentAccount();
}

function persistLanguage() {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  } catch {
    // The page still works when language persistence is unavailable.
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
  persistLanguage();
  renderTranslations();
}

async function getProvider() {
  const sdk = window.YeYingWeb3;
  if (!sdk || typeof sdk.getProvider !== 'function') return null;
  if (walletProvider) return walletProvider;
  if (!providerDiscoveryPromise) {
    providerDiscoveryPromise = sdk.getProvider({ preferYeYing: true, timeoutMs: 500 })
      .then((provider) => {
        if (!provider || !sdk.isYeYingProvider(provider)) return null;
        walletProvider = provider;
        if (typeof sdk.onAccountsChanged === 'function') {
          sdk.onAccountsChanged(provider, updateCurrentAccount);
        }
        return provider;
      })
      .catch(() => null)
      .finally(() => {
        providerDiscoveryPromise = null;
      });
  }
  return providerDiscoveryPromise;
}

function setWalletStatus(kind, key, values = {}) {
  walletStatusState = { kind, key, values };
  renderWalletStatus();
}

async function checkInstalled() {
  const provider = await getProvider();
  if (!provider) {
    updateCurrentAccount([]);
    setWalletStatus('warn', 'status_not_installed');
    return null;
  }
  setWalletStatus('good', 'status_installed');
  try {
    updateCurrentAccount(await window.YeYingWeb3.getAccounts(provider));
  } catch {
    updateCurrentAccount([]);
  }
  return provider;
}

async function requestConnection() {
  const provider = await checkInstalled();
  if (!provider) {
    window.open(NODE_URL, '_blank', 'noopener,noreferrer');
    return;
  }
  try {
    const accounts = await window.YeYingWeb3.requestAccounts({ provider });
    const address = Array.isArray(accounts) && accounts[0] ? accounts[0] : '';
    updateCurrentAccount(accounts);
    if (address) {
      setWalletStatus('good', 'status_connected', { address: `${address.slice(0, 6)}…${address.slice(-4)}` });
    } else {
      setWalletStatus('good', 'status_wallet_connected');
    }
  } catch (error) {
    const message = error && typeof error.message === 'string' ? error.message : '';
    setWalletStatus('warn', message ? 'status_error' : 'status_cancelled', message ? { message } : {});
  }
}

document.querySelectorAll('[data-install-link]').forEach((link) => {
  link.addEventListener('click', () => {
    link.setAttribute('href', NODE_URL);
  });
});

document.querySelector('#language-toggle')?.addEventListener('click', toggleLanguage);
document.querySelector('#check-wallet')?.addEventListener('click', requestConnection);
renderTranslations();
window.addEventListener('ethereum#initialized', checkInstalled, { once: true });
window.setTimeout(checkInstalled, 350);
